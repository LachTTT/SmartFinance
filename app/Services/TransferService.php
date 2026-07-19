<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Transfer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransferService
{
    public function __construct(
        private AccountBalanceService $balanceService
    ) {}

    /**
     * Semua transfer milik user
     */
    public function getAll()
    {
        return Transfer::with([
            'fromAccount',
            'toAccount',
        ])
            ->where('user_id', Auth::id())
            ->latest('transfer_date')
            ->get();
    }

    /**
     * Membuat transfer
     */
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

            return Transfer::create($data);
        });
    }
}
