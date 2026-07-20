<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Investment;
use App\Models\Saving;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use App\Models\Budget;

class DashboardService
{
    public function summary(): array
    {
        $userId = Auth::id();

        $balance = Account::where('user_id', $userId)
            ->sum('balance');

        $income = Transaction::where('user_id', $userId)
            ->where('type', 'income')
            ->sum('amount');

        $expense = Transaction::where('user_id', $userId)
            ->where('type', 'expense')
            ->sum('amount');

        $saving = Saving::where('user_id', $userId)
            ->sum('current_amount');

        $investment = Investment::where('user_id', $userId)
            ->sum('current_value');

        return [
            'balance' => $balance,
            'income' => $income,
            'expense' => $expense,
            'saving' => $saving,
            'investment' => $investment,
        ];
    }

    public function accounts()
    {
        return Account::where('user_id', Auth::id())
            ->latest()
            ->get();
    }

    public function recentTransactions()
    {
        return Transaction::with([
            'category',
            'account'
        ])
            ->where('user_id', Auth::id())
            ->latest()
            ->take(5)
            ->get();
    }

    public function budgetProgress()
    {
        $budgets = Budget::with('category')
            ->where('user_id', Auth::id())
            ->get();

        return $budgets->map(function ($budget) {

            $spent = Transaction::where('user_id', Auth::id())
                ->where('type', 'expense')
                ->where('category_id', $budget->category_id)
                ->whereMonth('transaction_date', $budget->month)
                ->whereYear('transaction_date', $budget->year)
                ->sum('amount');

            return [
                'id' => $budget->id,
                'category' => $budget->category->name,
                'budget' => $budget->amount,
                'spent' => $spent,
                'remaining' => max(0, $budget->amount - $spent),
                'percentage' => $budget->amount > 0
                    ? round(($spent / $budget->amount) * 100, 1)
                    : 0,
            ];
        });
    }

    public function savingProgress()
    {
        return Saving::where('user_id', Auth::id())
            ->get()
            ->map(function ($saving) {

                return [
                    'id' => $saving->id,
                    'title' => $saving->title,
                    'target' => $saving->target_amount,
                    'current' => $saving->current_amount,
                    'percentage' => $saving->target_amount > 0
                        ? round(($saving->current_amount / $saving->target_amount) * 100, 1)
                        : 0,
                ];
            });
    }

    public function investmentSummary()
    {
        return Investment::with('investmentType')
            ->where('user_id', Auth::id())
            ->get()
            ->map(function ($investment) {

                $profit = $investment->current_value - $investment->initial_amount;

                return [
                    'id' => $investment->id,
                    'name' => $investment->name,
                    'type' => $investment->investmentType->name,
                    'buy' => $investment->initial_amount,
                    'current' => $investment->current_value,
                    'profit' => $profit,
                    'percentage' => $investment->initial_amount > 0
                        ? round(($profit / $investment->initial_amount) * 100, 2)
                        : 0,
                ];
            });
    }
}
