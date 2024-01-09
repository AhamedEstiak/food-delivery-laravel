<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RestaurantController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    // dd(Restaurant::all());
    return Inertia::render(
      'Restaurants/Index',
      [
        'restaurants' => Restaurant::latest()->paginate(10),
      ]
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
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Restaurant $restaurant)
  {
    return Inertia::render('Restaurants/Show', ['restaurant' => $restaurant]);
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
