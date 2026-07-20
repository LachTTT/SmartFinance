<?php

namespace App\Http\Requests\SavingTransaction;

use Illuminate\Foundation\Http\FormRequest;

class StoreSavingTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'saving_id' => ['required', 'exists:savings,id'],
            'account_id' => ['required', 'exists:accounts,id'],
            'amount' => ['required', 'numeric', 'gt:0'],
            'transaction_date' => ['required', 'date'],
            'note' => ['nullable', 'string'],
        ];
    }
}
