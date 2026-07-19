<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TransactionService
{
    public function __construct(
        private AccountBalanceService $balanceService,
        private TransactionCodeService $codeService
    ) {}

    /**
     * Menampilkan seluruh transaksi milik user
     */
    public function getAll()
    {
        return Transaction::with([
            'account',
            'category'
        ])
            ->where('user_id', Auth::id())
            ->latest('transaction_date')
            ->get();
    }

    /**
     * Detail transaksi
     */
    public function getById(int $id): Transaction
    {
        return Transaction::where('user_id', Auth::id())
            ->findOrFail($id);
    }

    /**
     * Membuat transaksi baru
     */
    public function create(array $data): Transaction
    {
        return DB::transaction(function () use ($data) {

            $account = Account::where('user_id', Auth::id())
                ->findOrFail($data['account_id']);

            if ($data['type'] === 'income') {
                $this->balanceService->increase(
                    $account,
                    $data['amount']
                );
            } else {
                $this->balanceService->decrease(
                    $account,
                    $data['amount']
                );
            }

            $data['uuid'] = (string) Str::uuid();

            $data['transaction_code'] = $this->codeService
                ->generate('TRX');

            $data['user_id'] = Auth::id();

            return Transaction::create($data);
        });
    }

    /**
     * Update transaksi
     */
    public function update(Transaction $transaction, array $data): Transaction
    {
        return DB::transaction(function () use ($transaction, $data) {

            $oldAccount = Account::findOrFail($transaction->account_id);

            /**
             * Kembalikan saldo lama
             */

            if ($transaction->type === 'income') {

                $this->balanceService->decrease(
                    $oldAccount,
                    $transaction->amount
                );
            } else {

                $this->balanceService->increase(
                    $oldAccount,
                    $transaction->amount
                );
            }

            /**
             * Account baru
             */

            $newAccount = Account::findOrFail($data['account_id']);

            /**
             * Hitung saldo baru
             */

            if ($data['type'] === 'income') {

                $this->balanceService->increase(
                    $newAccount,
                    $data['amount']
                );
            } else {

                $this->balanceService->decrease(
                    $newAccount,
                    $data['amount']
                );
            }

            $transaction->update($data);

            return $transaction->refresh();
        });
    }

    /**
     * Hapus transaksi
     */
    public function delete(Transaction $transaction): bool
    {
        return DB::transaction(function () use ($transaction) {

            $account = Account::findOrFail(
                $transaction->account_id
            );

            // Kembalikan saldo
            if ($transaction->type === 'income') {

                $this->balanceService->decrease(
                    $account,
                    $transaction->amount
                );
            } else {

                $this->balanceService->increase(
                    $account,
                    $transaction->amount
                );
            }

            return $transaction->delete();
        });
    }
}
