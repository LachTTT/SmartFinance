<?php

namespace App\Services;

use App\Models\Budget;
use Illuminate\Support\Facades\Auth;

class BudgetService
{
    public function create(array $data): Budget
    {
        $data['user_id'] = Auth::id();

        return Budget::create($data);
    }

    public function update(Budget $budget, array $data): Budget
    {
        $budget->update($data);

        return $budget->refresh();
    }

    public function delete(Budget $budget): bool
    {
        return $budget->delete();
    }
}
