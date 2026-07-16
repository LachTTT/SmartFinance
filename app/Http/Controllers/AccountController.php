<?php

namespace App\Http\Controllers;

use App\Http\Requests\Account\StoreAccountRequest;
use App\Http\Requests\Account\UpdateAccountRequest;
use App\Models\AccountType;
use App\Services\AccountService;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function __construct(
        private AccountService $accountService
    ) {}

    public function index()
    {
        return Inertia::render('Accounts/Index', [
            'accounts' => $this->accountService->getAll(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Accounts/Create', [
            'accountTypes' => AccountType::all(),
        ]);
    }

    public function store(StoreAccountRequest $request)
    {
        $this->accountService->create(
            $request->validated()
        );

        return redirect()->route('accounts.index');
    }

    public function edit(int $id)
    {
        return Inertia::render('Accounts/Edit', [
            'account' => $this->accountService->getById($id),
            'accountTypes' => AccountType::all(),
        ]);
    }

    public function update(
        UpdateAccountRequest $request,
        int $id
    ) {
        $this->accountService->update(
            $id,
            $request->validated()
        );

        return redirect()->route('accounts.index');
    }

    public function destroy(int $id)
    {
        $this->accountService->delete($id);

        return redirect()->route('accounts.index');
    }
}
