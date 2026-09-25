<?php

namespace App\Http\Requests\Saving;

use Illuminate\Foundation\Http\FormRequest;

class FinishSavingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'saving_id' => [
                'required',
                'exists:savings,id',
            ],

            'account_id' => [
                'required',
                'exists:accounts,id',
            ],

            'category_id' => [
                'required',
                'exists:categories,id',
            ],

            'amount' => [
                'required',
                'numeric',
                'min:0.01',
            ],

            'transaction_date' => [
                'required',
                'date',
            ],

            'description' => [
                'nullable',
                'string',
            ],
        ];
    }
}
