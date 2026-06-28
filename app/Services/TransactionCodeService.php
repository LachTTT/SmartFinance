<?php

namespace App\Services;

class TransactionCodeService
{
    public function generate(string $prefix): string
    {
        return sprintf(
            '%s-%s-%04d',
            strtoupper($prefix),
            now()->format('YmdHis'),
            random_int(1, 9999)
        );
    }
}
