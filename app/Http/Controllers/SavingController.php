<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Saving;
use App\Services\SavingService;
use App\Http\Requests\Saving\StoreSavingRequest;
use App\Http\Requests\Saving\UpdateSavingRequest;
use App\Http\Requests\SavingTransaction\StoreSavingTransactionRequest;
use App\Models\Account;
use App\Http\Requests\Saving\FinishSavingRequest;
use App\Models\Category;

class SavingController extends Controller
{
    public function __construct(
        private SavingService $savingService
    ) {}

    public function index()
    {
        return Inertia::render('Saving/Index', [
            'savings' => $this->savingService->getAll(),
            'accounts' => Account::where('user_id', auth()->id())
                ->get(),

            'expenseCategories' => Category::where('type', 'expense')
                ->where(function ($query) {
                    $query->where('user_id', auth()->id())
                        ->orWhereNull('user_id');
                })
                ->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Saving/Create', [
            'accounts' => Account::where('user_id', auth()->id())->get(),
        ]);
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
        abort_if($saving->user_id !== auth()->id(), 403);

        return Inertia::render('Saving/Edit', [
            'saving' => $saving,
            'accounts' => Account::where('user_id', auth()->id())->get(),
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



    public function finish(FinishSavingRequest $request)
    {
        $this->savingService->finish(
            $request->validated()
        );

        return back()->with(
            'success',
            'Saving berhasil diselesaikan.'
        );
    }
}
