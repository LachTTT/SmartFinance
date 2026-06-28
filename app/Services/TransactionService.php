<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionService
{
    public function __construct(
        private AccountBalanceService $balanceService,
        private TransactionCodeService $codeService
    ) {}

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

            $data['user_id'] = Auth::id();

            $data['code'] = $this->codeService->generate('TRX');

            return Transaction::create($data);
        });
    }
}
