<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Saving;
use App\Models\SavingTransaction;
use Illuminate\Support\Facades\DB;

class SavingService
{
    public function deposit(array $data): SavingTransaction
    {
        return DB::transaction(function () use ($data) {

            $account = Account::findOrFail($data['account_id']);

            $saving = Saving::findOrFail($data['saving_id']);

            if ($account->balance < $data['amount']) {
                throw new \Exception('Saldo tidak mencukupi.');
            }

            $account->decrement('balance', $data['amount']);

            $saving->increment('current_amount', $data['amount']);

            return SavingTransaction::create($data);
        });
    }
}
