<?php

namespace App\Services;

use App\Models\Account;
use Exception;

class AccountBalanceService
{
    public function increase(Account $account, float $amount): void
    {
        if (! $account->is_active) {
            throw new Exception('Account tidak aktif.');
        }

        $account->increment('balance', $amount);
    }

    public function decrease(Account $account, float $amount): void
    {
        if (! $account->is_active) {
            throw new Exception('Account tidak aktif.');
        }

        if ($account->balance < $amount) {
            throw new Exception('Saldo tidak mencukupi.');
        }

        $account->decrement('balance', $amount);
    }

    public function transfer(
        Account $from,
        Account $to,
        float $amount
    ): void {

        $this->decrease($from, $amount);

        $this->increase($to, $amount);
    }
}
