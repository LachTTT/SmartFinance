<?php

namespace App\Http\Requests\Investment;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInvestmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }


    public function rules(): array
    {
        return [
            'account_id' => ['required', 'exists:accounts,id'],
            'investment_type_id' => ['required', 'exists:investment_types,id'],
            'name' => ['required', 'string', 'max:255'],
            'initial_amount' => ['required', 'numeric', 'gt:0'],
            'current_value' => ['required', 'numeric', 'gte:0'],
            'buy_date' => ['required', 'date'],
            'note' => ['nullable', 'string'],
        ];
    }
}
