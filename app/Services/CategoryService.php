<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class CategoryService
{
    public function getAll()
    {
        return Category::where(function ($query) {
            $query->where('user_id', Auth::id())
                ->orWhereNull('user_id');
        })->get();
    }

    public function create(array $data): Category
    {
        $data['user_id'] = Auth::id();

        return Category::create($data);
    }

    public function update(Category $category, array $data): Category
    {
        $category->update($data);

        return $category->refresh();
    }

    public function delete(Category $category): bool
    {
        return $category->delete();
    }
}
