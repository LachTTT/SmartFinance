<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\AccountService;
use App\Http\Requests\Account\StoreAccountRequest;
use App\Http\Requests\Account\UpdateAccountRequest;

class AccountController extends Controller
{
    public function __construct(
        private AccountService $accountService
    ) {}

    /**
     * Menampilkan daftar account
     */
    public function index()
    {
        return Inertia::render('Accounts/Index', [
            'accounts' => $this->accountService->getAll(),
        ]);
    }

    /**
     * Form tambah account
     */
    public function create()
    {
        return Inertia::render('Accounts/Create');
    }

    /**
     * Simpan account
     */
    public function store(StoreAccountRequest $request)
    {
        $this->accountService->create(
            $request->validated()
        );

        return redirect()
            ->route('accounts.index')
            ->with('success', 'Account berhasil dibuat.');
    }

    /**
     * Form edit account
     */
    public function edit(string $uuid)
    {
        return Inertia::render('Accounts/Edit', [
            'account' => $this->accountService->getByUuid($uuid),
        ]);
    }

    /**
     * Update account
     */
    public function update(
        UpdateAccountRequest $request,
        string $uuid
    ) {
        $this->accountService->update(
            $uuid,
            $request->validated()
        );

        return redirect()
            ->route('accounts.index')
            ->with('success', 'Account berhasil diperbarui.');
    }

    /**
     * Hapus account
     */
    public function destroy(string $uuid)
    {
        $this->accountService->delete($uuid);

        return redirect()
            ->route('accounts.index')
            ->with('success', 'Account berhasil dihapus.');
    }
}
