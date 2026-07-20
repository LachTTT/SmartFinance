<?php

namespace App\Http\Requests\Saving;

use Illuminate\Foundation\Http\FormRequest;

class StoreSavingRequest extends FormRequest
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
            'account_id' => ['required', 'exists:accounts,id'],
            'title' => ['required', 'string', 'max:255'],
            'target_amount' => ['required', 'numeric', 'gt:0'],
            'deadline' => ['nullable', 'date'],
        ];
    }
}
