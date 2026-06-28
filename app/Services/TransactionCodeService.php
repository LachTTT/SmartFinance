<?php

namespace App\Services;

use App\Models\Transaction;

class TransactionCodeService
{
    public function generate(string $prefix = 'TRX'): string
    {
        $today = now()->format('Ymd');

        $last = Transaction::whereDate('created_at', today())
            ->count() + 1;

        return sprintf(
            '%s-%s-%05d',
            $prefix,
            $today,
            $last
        );
    }
}
