<?php

namespace Database\Factories;

use App\Models\Dish;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Price>
 */
class PriceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'dish_id' => Dish::factory(),
            'price' => $this->faker->randomFloat(2, 1, 100),
            'valid_from' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'valid_to' => $this->faker->dateTimeBetween('+2 months', '+3 months'),
        ];
    }
}
