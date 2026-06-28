<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Transfer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransferService
{
    public function transfer(array $data): Transfer
    {
        return DB::transaction(function () use ($data) {

            $from = Account::findOrFail($data['from_account_id']);
            $to = Account::findOrFail($data['to_account_id']);

            if ($from->balance < $data['amount']) {
                throw new \Exception('Saldo tidak mencukupi.');
            }

            $from->decrement('balance', $data['amount']);

            $to->increment('balance', $data['amount']);

            $data['user_id'] = Auth::id();

            return Transfer::create($data);
        });
    }
}
