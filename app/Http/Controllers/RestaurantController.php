<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class RestaurantController extends Controller
{
  /**
   * Display a listing of the restaurants for all.
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
   * Display a listing of the restaurants for logged in user.
   */
  public function list()
  {

    $user = Auth::user(); // get the authenticated user

    return Inertia::render(
      'Restaurants/List',
      [
        'restaurant_list' => Restaurant::where('user_id', $user->id)->latest()->paginate(10),
        'authUser' => $user,
      ]
    );
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render(
        'Restaurants/Create'
    );
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
    
    // $price = $restaurant->load[('dishes.price')] // using eager loading for efficiency to fetch price from dishes
    $restaurant->load('dishes'); // eager load

    return Inertia::render('Restaurants/Show', [
      'restaurant' => $restaurant,
      'dishes' => $restaurant->dishes,
    ]);
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
