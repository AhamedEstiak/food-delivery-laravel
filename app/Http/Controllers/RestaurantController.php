<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;

class RestaurantController extends Controller
{
  /**
   * Display a listing of the restaurants for all.
   */
  public function index()
  {
    return Inertia::render(
      'Restaurants/Index'
    );
  }

  /**
   * Display a listing of the restaurants for logged in user.
   */
  public function list()
  {
    return Inertia::render(
      'Restaurants/Index'
    );
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created restaurants in storage.
   */
  public function store(Request $request)
  {
    $formFields = $request->validate([
        'name' => ['required', Rule::unique('restaurants', 'name')],
        'description' => ['max: 50'],
        'address' => ['required', 'max:50'],
        'rating' => ['nullable'],
        'lat' => ['nullable'],
        'lon' => ['nullable'],
    ]);

    $formFields['user_id'] = auth()->id();
    Restaurant::create($formFields);

    return Redirect::route('restaurants.list')->with('message', 'Restaurant Created Successfully');
  }

  /**
   * Display the specified resource.
   */
  public function show(Restaurant $restaurant)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Restaurant $restaurant)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Restaurant $restaurant)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Restaurant $restaurant)
  {
    //
  }
}
