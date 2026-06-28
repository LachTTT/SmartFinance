<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Services\CategoryService;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;

class CategoryController extends Controller
{
    public function __construct(
        private CategoryService $categoryService
    ) {}

    public function index()
    {
        return Inertia::render('Category/Index', [
            'categories' => $this->categoryService->getAll(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Category/Create');
    }

    public function store(StoreCategoryRequest $request)
    {
        $this->categoryService->create($request->validated());

        return redirect()
            ->route('categories.index')
            ->with('success', 'Category berhasil dibuat.');
    }

    public function show(Category $category)
    {
        return Inertia::render('Category/Show', [
            'category' => $category,
        ]);
    }

    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit', [
            'category' => $category,
        ]);
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $this->categoryService->update($category, $request->validated());

        return redirect()
            ->route('categories.index')
            ->with('success', 'Category berhasil diupdate.');
    }

    public function destroy(Category $category)
    {
        $this->categoryService->delete($category);

        return redirect()
            ->route('categories.index')
            ->with('success', 'Category berhasil dihapus.');
    }
}
