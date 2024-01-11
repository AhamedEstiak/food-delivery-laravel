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
            'name' => $this->faker->text(150), // Fix the method call here
            'description' => $this->faker->text(250),
            'address' => $this->faker->text(250),
            'rating' => $this->faker->randomFloat(2, 0, 5),
            'lat' => $this->faker->latitude(),
            'lon' => $this->faker->longitude(),
            'user_id' => $user->id,
        ];
    }
}
