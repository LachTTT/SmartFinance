<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccountTypeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('account_types')->insert([
            [
                'name' => 'Cash',
                'icon' => 'wallet',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bank',
                'icon' => 'building-2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'E-Wallet',
                'icon' => 'smartphone',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Credit Card',
                'icon' => 'credit-card',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
