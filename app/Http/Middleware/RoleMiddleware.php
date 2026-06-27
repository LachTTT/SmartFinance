<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            return redirect('/login')->with('error', 'Anda harus login terlebih dahulu.');
        }

        // Tambahkan logging untuk debugging
        Log::info('User role: ' . Auth::user()->role);
        Log::info('Required roles: ' . implode(',', $roles));
        Log::info('Current URL: ' . $request->fullUrl());

        // Admin selalu punya akses ke semua halaman
        if (Auth::user()->role === 'admin') {
            return $next($request);
        }


        $userRole = Auth::user()->role;


        // User hanya dapat mengakses fitur user
        if ($userRole === 'user' && in_array('user', $roles)) {
            return $next($request);
        }

        // Jika tidak memiliki akses yang sesuai
        return redirect('/dashboard')->with('error', 'Anda tidak memiliki akses ke halaman ini.');
    }
}
