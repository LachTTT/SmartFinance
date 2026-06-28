<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestmentType extends Model
{
    protected $fillable = [
        'name',
    ];

    public function investments()
    {
        return $this->hasMany(Investment::class);
    }
}
