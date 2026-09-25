<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Saving;
use App\Models\SavingTransaction;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SavingService
{
    public function __construct(
        private AccountBalanceService $balanceService,
        private TransactionCodeService $codeService,
        private TransactionService $transactionService
    ) {}

    public function getAll()
    {
        return Saving::with('account')
            ->where('user_id', Auth::id())
            ->latest()
            ->get();
    }

    public function deposit(array $data): SavingTransaction
    {
        return DB::transaction(function () use ($data) {

            $account = Account::where('user_id', Auth::id())
                ->findOrFail($data['account_id']);

            $saving = Saving::where('user_id', Auth::id())
                ->findOrFail($data['saving_id']);

            $this->balanceService->decrease(
                $account,
                $data['amount']
            );

            $saving->increment(
                'current_amount',
                $data['amount']
            );

            $saving->refresh();

            if ($saving->current_amount >= $saving->target_amount) {
                $saving->update([
                    'status' => 'completed',
                ]);
            }

            $data['code'] = $this->codeService->generate('SVG');

            return SavingTransaction::create($data);
        });
    }

    public function create(array $data): Saving
    {
        $data['user_id'] = Auth::id();

        return Saving::create($data);
    }

    public function update(Saving $saving, array $data): Saving
    {
        $newTargetAmount = $data['target_amount'];
        $currentAmount = $saving->current_amount;

        $data['status'] = $currentAmount >= $newTargetAmount
            ? 'completed'
            : 'active';

        $saving->update($data);

        return $saving->refresh();
    }
    public function delete(Saving $saving): bool
    {
        return $saving->delete();
    }

    public function finish(array $data): Transaction
    {
        return DB::transaction(function () use ($data) {

            $saving = Saving::where('user_id', Auth::id())
                ->findOrFail($data['saving_id']);

            if ($saving->status !== 'completed') {
                abort(422, 'Saving belum mencapai target.');
            }

            $amount = $saving->current_amount;

            /*
         * Kembalikan uang saving ke account
         */
            $account = Account::where('user_id', Auth::id())
                ->findOrFail($data['account_id']);

            $this->balanceService->increase(
                $account,
                $amount
            );

            /*
         * Buat transaksi expense menggunakan
         * TransactionService
         */
            $transaction = $this->transactionService->create([
                'account_id' => $account->id,
                'category_id' => $data['category_id'],
                'title' => $saving->title,
                'description' => $data['description'] ?? null,
                'amount' => $amount,
                'type' => 'expense',
                'transaction_date' => $data['transaction_date'],
            ]);

            /*
         * Saving sudah selesai
         */
            $saving->update([
                'status' => 'withdrawn',
            ]);

            return $transaction;
        });
    }
}
