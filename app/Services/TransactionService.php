<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransactionService
{
    public function create(array $data): Transaction
    {
        return DB::transaction(function () use ($data) {

            $data['user_id'] = Auth::id();

            $account = Account::findOrFail($data['account_id']);

            if ($data['type'] === 'income') {

                $account->increment('balance', $data['amount']);
            } else {

                if ($account->balance < $data['amount']) {
                    throw new \Exception('Saldo tidak mencukupi.');
                }

                $account->decrement('balance', $data['amount']);
            }

            return Transaction::create($data);
        });
    }
}
