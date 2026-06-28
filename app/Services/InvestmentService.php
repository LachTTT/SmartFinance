<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Investment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InvestmentService
{
    public function __construct(
        private AccountBalanceService $balanceService,
        private TransactionCodeService $codeService
    ) {}

    public function buy(array $data): Investment
    {
        return DB::transaction(function () use ($data) {

            $account = Account::where('user_id', Auth::id())
                ->findOrFail($data['account_id']);

            $this->balanceService->decrease(
                $account,
                $data['initial_amount']
            );

            $data['user_id'] = Auth::id();

            $data['code'] = $this->codeService->generate('INV');

            return Investment::create($data);
        });
    }
}
