<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Facades\Auth;

class AccountService
{
    public function getAll()
    {
        return Account::with('accountType')
            ->where('user_id', Auth::id())
            ->latest()
            ->get();
    }

    public function getById(int $id): Account
    {
        return Account::where('user_id', Auth::id())
            ->findOrFail($id);
    }

    public function create(array $data): Account
    {
        $data['user_id'] = Auth::id();

        return Account::create($data);
    }

    public function update(Account $account, array $data): Account
    {
        $account->update($data);

        return $account->refresh();
    }

    public function delete(Account $account): bool
    {
        return $account->delete();
    }
}
