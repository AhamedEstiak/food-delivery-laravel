<?php

namespace Database\Factories;

use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurant>
 */
class RestaurantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   
        $user = User::factory()->create();
        
        return [
            'name' => fake()->text(150),
            'description' => fake()-> text(250),
            'address' => fake()-> text(250),
            'rating' => fake()-> randomFloat(2, 0, 5),
            'lat' => fake()->latitude(),
            'lon' => fake()-> longitude(),
            'user_id' => $user->id,
        ];
    }
}
