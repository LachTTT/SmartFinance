<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Transfer/Index');
    }

    public function create()
    {
        return Inertia::render('Transfer/Create');
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
