<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Transfer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransferService
{
    public function __construct(
        private AccountBalanceService $balanceService,
        private TransactionCodeService $codeService
    ) {}

    public function transfer(array $data): Transfer
    {
        return DB::transaction(function () use ($data) {

            $from = Account::where('user_id', Auth::id())
                ->findOrFail($data['from_account_id']);

            $to = Account::where('user_id', Auth::id())
                ->findOrFail($data['to_account_id']);

            $this->balanceService->transfer(
                $from,
                $to,
                $data['amount']
            );

            $data['user_id'] = Auth::id();

            $data['code'] = $this->codeService->generate('TRF');

            return Transfer::create($data);
        });
    }
}
