<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Transaction;
use App\Services\TransactionService;
use App\Http\Requests\Transaction\StoreTransactionRequest;
use App\Http\Requests\Transaction\UpdateTransactionRequest;
use App\Models\Account;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    public function __construct(
        private TransactionService $transactionService
    ) {}

    public function index()
    {
        return Inertia::render('Transaction/Index', [
            'transactions' => $this->transactionService->getAll(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Transaction/Create', [
            'accounts' => Account::where('user_id', Auth::id())->get(),

            'categories' => Category::where(function ($q) {
                $q->where('user_id', Auth::id())
                    ->orWhereNull('user_id');
            })->get(),
        ]);
    }

    public function store(StoreTransactionRequest $request)
    {
        $this->transactionService->create($request->validated());

        return redirect()
            ->route('transactions.index')
            ->with('success', 'Transaction berhasil dibuat.');
    }

    public function show(Transaction $transaction)
    {
        return Inertia::render('Transaction/Show', [
            'transaction' => $transaction,
        ]);
    }

    public function edit(Transaction $transaction)
    {
        return Inertia::render('Transaction/Edit', [
            'transaction' => $transaction,
            'accounts' => Account::where('user_id', Auth::id())->get(),
            'categories' => Category::where(function ($q) {
                $q->where('user_id', Auth::id())
                    ->orWhereNull('user_id');
            })->get(),
        ]);
    }

    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        $this->transactionService->update(
            $transaction,
            $request->validated()
        );

        return redirect()
            ->route('transactions.index')
            ->with('success', 'Transaction berhasil diupdate.');
    }

    public function destroy(Transaction $transaction)
    {
        $this->transactionService->delete($transaction);

        return redirect()
            ->route('transactions.index')
            ->with('success', 'Transaction berhasil dihapus.');
    }
}
