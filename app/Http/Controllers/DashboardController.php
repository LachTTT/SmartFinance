<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\DashboardService;

class DashboardController extends Controller
{
    public function __construct(
        private DashboardService $dashboardService
    ) {}

    public function index()
    {
        return Inertia::render('Dashboard', [
            'summary' => $this->dashboardService->summary(),
            'accounts' => $this->dashboardService->accounts(),
            'transactions' => $this->dashboardService->recentTransactions(),

            'budgets' => $this->dashboardService->budgetProgress(),
            'savings' => $this->dashboardService->savingProgress(),
            'investments' => $this->dashboardService->investmentSummary(),
        ]);
    }
}
