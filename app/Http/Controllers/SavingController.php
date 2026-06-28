<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Saving;
use App\Services\SavingService;
use App\Http\Requests\Saving\StoreSavingRequest;
use App\Http\Requests\Saving\UpdateSavingRequest;
use App\Http\Requests\SavingTransaction\StoreSavingTransactionRequest;

class SavingController extends Controller
{
    public function __construct(
        private SavingService $savingService
    ) {}

    public function index()
    {
        return Inertia::render('Saving/Index');
    }

    public function create()
    {
        return Inertia::render('Saving/Create');
    }

    public function store(StoreSavingRequest $request)
    {
        $this->savingService->create($request->validated());

        return redirect()
            ->route('savings.index')
            ->with('success', 'Saving berhasil dibuat.');
    }

    public function edit(Saving $saving)
    {
        return Inertia::render('Saving/Edit', [
            'saving' => $saving,
        ]);
    }

    public function update(UpdateSavingRequest $request, Saving $saving)
    {
        $this->savingService->update(
            $saving,
            $request->validated()
        );

        return redirect()
            ->route('savings.index');
    }

    public function destroy(Saving $saving)
    {
        $this->savingService->delete($saving);

        return redirect()
            ->route('savings.index');
    }

    public function deposit(StoreSavingTransactionRequest $request)
    {
        $this->savingService->deposit(
            $request->validated()
        );

        return back()->with('success', 'Berhasil menabung.');
    }
}
