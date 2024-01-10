<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Dish;
use App\Models\Price;
use App\Models\Restaurant;
use App\Models\RestaurantDish;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Restaurant::factory(30)->create();
        Dish::factory(90)->create();
        RestaurantDish::factory(90)->create();
        Price::factory(90)->create();
    }
}
