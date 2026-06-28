<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Investment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InvestmentService
{
    public function buy(array $data): Investment
    {
        return DB::transaction(function () use ($data) {

            $account = Account::findOrFail($data['account_id']);

            if ($account->balance < $data['initial_amount']) {
                throw new \Exception('Saldo tidak mencukupi.');
            }

            $account->decrement('balance', $data['initial_amount']);

            $data['user_id'] = Auth::id();

            return Investment::create($data);
        });
    }
}
