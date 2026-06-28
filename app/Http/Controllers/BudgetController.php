<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Budget;
use App\Services\BudgetService;
use App\Http\Requests\Budget\StoreBudgetRequest;
use App\Http\Requests\Budget\UpdateBudgetRequest;

class BudgetController extends Controller
{
    public function __construct(
        private BudgetService $budgetService
    ) {}

    public function index()
    {
        return Inertia::render('Budget/Index');
    }

    public function create()
    {
        return Inertia::render('Budget/Create');
    }

    public function store(StoreBudgetRequest $request)
    {
        $this->budgetService->create(
            $request->validated()
        );

        return redirect()
            ->route('budgets.index');
    }

    public function edit(Budget $budget)
    {
        return Inertia::render('Budget/Edit', [
            'budget' => $budget,
        ]);
    }

    public function update(UpdateBudgetRequest $request, Budget $budget)
    {
        $this->budgetService->update(
            $budget,
            $request->validated()
        );

        return redirect()
            ->route('budgets.index');
    }

    public function destroy(Budget $budget)
    {
        $this->budgetService->delete($budget);

        return redirect()
            ->route('budgets.index');
    }
}
