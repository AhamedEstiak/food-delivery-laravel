<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    // function to create many to many relationship with Dish Model
    public function dishes(){
        return $this->belongsToMany(Dish::class, RestaurantDish::class);
    }
}
