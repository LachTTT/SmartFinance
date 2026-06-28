<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InvestmentTypeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('investment_types')->insert([
            ['name' => 'Stock', 'icon' => 'chart-candlestick', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Crypto', 'icon' => 'bitcoin', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Gold', 'icon' => 'coins', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Bond', 'icon' => 'file-text', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Mutual Fund', 'icon' => 'pie-chart', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
