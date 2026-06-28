<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavingTransaction extends Model
{
    protected $fillable = [
        'saving_id',
        'account_id',
        'amount',
        'note',
        'transaction_date',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'transaction_date' => 'date',
    ];

    public function savingGoal()
    {
        return $this->belongsTo(Saving::class);
    }

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
