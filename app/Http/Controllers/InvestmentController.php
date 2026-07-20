<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Investment;
use App\Services\InvestmentService;
use App\Http\Requests\Investment\StoreInvestmentRequest;
use App\Http\Requests\Investment\UpdateInvestmentRequest;

use App\Models\Account;
use App\Models\InvestmentType;

class InvestmentController extends Controller
{
    public function __construct(
        private InvestmentService $investmentService
    ) {}

    public function index()
    {
        return Inertia::render('Investment/Index', [
            'investments' => $this->investmentService->getAll(),
        ]);
    }


    public function create()
    {
        return Inertia::render('Investment/Create', [
            'accounts' => Account::where('user_id', auth()->id())->get(),
            'types' => InvestmentType::all(),
        ]);
    }

    public function store(StoreInvestmentRequest $request)
    {
        $this->investmentService->buy(
            $request->validated()
        );

        return redirect()
            ->route('investments.index');
    }


    public function edit(Investment $investment)
    {
        return Inertia::render('Investment/Edit', [
            'investment' => $investment,
            'accounts' => Account::where('user_id', auth()->id())->get(),
            'types' => InvestmentType::all(),
        ]);
    }

    public function update(UpdateInvestmentRequest $request, Investment $investment)
    {
        $this->investmentService->update(
            $investment,
            $request->validated()
        );

        return redirect()
            ->route('investments.index');
    }

    public function destroy(Investment $investment)
    {
        $this->investmentService->delete($investment);

        return redirect()
            ->route('investments.index');
    }
}
