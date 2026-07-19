<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Inertia\Inertia;
use App\Services\TransferService;
use App\Http\Requests\Transfer\StoreTransferRequest;

class TransferController extends Controller
{
    public function __construct(
        private TransferService $transferService
    ) {}

    public function index()
    {
        return Inertia::render('Transfer/Index', [
            'transfers' => $this->transferService->getAll(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Transfer/Create', [
            'accounts' => Account::where('user_id', auth()->id())
                ->where('is_active', true)
                ->get(),
        ]);
    }

    public function store(StoreTransferRequest $request)
    {
        $this->transferService->transfer(
            $request->validated()
        );

        return redirect()
            ->route('transfers.index')
            ->with('success', 'Transfer berhasil.');
    }
}
