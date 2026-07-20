<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Budget;
use App\Services\BudgetService;
use App\Http\Requests\Budget\StoreBudgetRequest;
use App\Http\Requests\Budget\UpdateBudgetRequest;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class BudgetController extends Controller
{
    public function __construct(
        private BudgetService $budgetService
    ) {}

    public function index()
    {
        return Inertia::render('Budget/Index', [
            'budgets' => Budget::with('category')
                ->where('user_id', Auth::id())
                ->latest()
                ->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Budget/Create', [
            'categories' => Category::where(function ($query) {
                $query->where('user_id', Auth::id())
                    ->orWhereNull('user_id');
            })
                ->where('type', 'expense')
                ->orderBy('name')
                ->get(),
        ]);
    }

    public function store(StoreBudgetRequest $request)
    {
        $this->budgetService->create(
            $request->validated()
        );

        return redirect()
            ->route('budgets.index')
            ->with('success', 'Budget berhasil dibuat.');
    }

    public function edit(Budget $budget)
    {
        return Inertia::render('Budget/Edit', [
            'budget' => $budget,
            'categories' => Category::where(function ($query) {
                $query->where('user_id', Auth::id())
                    ->orWhereNull('user_id');
            })
                ->where('type', 'expense')
                ->orderBy('name')
                ->get(),
        ]);
    }

    public function update(UpdateBudgetRequest $request, Budget $budget)
    {
        $this->budgetService->update(
            $budget,
            $request->validated()
        );

        return redirect()
            ->route('budgets.index')
            ->with('success', 'Budget berhasil diperbarui.');
    }

    public function destroy(Budget $budget)
    {
        $this->budgetService->delete($budget);

        return redirect()
            ->route('budgets.index')
            ->with('success', 'Budget berhasil dihapus.');
    }
}
