<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Investment extends Model
{
    protected $fillable = [
        'user_id',
        'account_id',
        'investment_type_id',
        'name',
        'initial_amount',
        'current_value',
        'buy_date',
        'note',
    ];

    protected $casts = [
        'initial_amount' => 'decimal:2',
        'current_value' => 'decimal:2',
        'buy_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    public function investmentType()
    {
        return $this->belongsTo(InvestmentType::class);
    }
}
