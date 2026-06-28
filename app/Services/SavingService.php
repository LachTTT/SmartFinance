<?php

namespace App\Services;

use App\Models\Account;
use App\Models\Saving;
use App\Models\SavingTransaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SavingService
{
    public function __construct(
        private AccountBalanceService $balanceService,
        private TransactionCodeService $codeService
    ) {}

    public function deposit(array $data): SavingTransaction
    {
        return DB::transaction(function () use ($data) {

            $account = Account::findOrFail($data['account_id']);

            $saving = Saving::findOrFail($data['saving_id']);

            $this->balanceService->decrease(
                $account,
                $data['amount']
            );

            $saving->increment(
                'current_amount',
                $data['amount']
            );

            $data['code'] = $this->codeService->generate('SVG');

            return SavingTransaction::create($data);
        });
    }
    public function create(array $data): Saving
    {
        $data['user_id'] = Auth::id();

        return Saving::create($data);
    }
    public function update(Saving $saving, array $data): Saving
    {
        $saving->update($data);

        return $saving->refresh();
    }
    public function delete(Saving $saving): bool
    {
        return $saving->delete();
    }
}
