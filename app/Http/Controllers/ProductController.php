<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'Product/Index',
            [
                'products' => Product::latest()->filter(request(['tag', 'search']))->paginate(6),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name' => ['required',  Rule::unique('products', 'name')],
            'description' => ['required', 'max:200'],
            'price' => 'required',
            'unit' => 'required',
            'quantity' => 'required',
            'stock' => ['nullable', 'max:25'],
            'tags' => 'required',
        ]);
        if ($request->hasFile('image')) {
            $formFields['image'] = $request->file('image')->store('images', 'public');
        }
        $formFields['user_id'] = auth()->id();

        Product::create($formFields);

        return Redirect::route('products.index')->with('message', 'Product Created Successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->validated());
        return redirect('products.index')->with(['message' => 'Product Updated Successfully.']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        // return Redirect::route('product.index');
        return redirect('products.index')->with('message', 'Product Removed Successfully.');
    }
}
