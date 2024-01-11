<?php

namespace Database\Factories;

use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SpecialOffer>
 */
class SpecialOfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'restaurant_id' => Restaurant::factory(),
            'name' => $this->faker->word . ' Special',
            'description' => $this->faker->paragraph,
            'valid_from' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'valid_to' => $this->faker->dateTimeBetween('+2 months', '+3 months'),
            // 'details' => $this->faker->word,
            'details' => json_encode(['discount' => $this->faker->randomFloat(2, 10, 30)]),
        ];
    }
}
