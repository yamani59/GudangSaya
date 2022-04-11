<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;
use App\Models\Brand;
use App\Models\Product;
use App\Models\User;
use App\Models\ProductCategory as Category;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    $faker = Factory::create('id_ID ');

    User::create([
      'name' => $faker->name,
      'email' => $faker->email(),
      'role' => 'admin',
      'password' => bcrypt('12345678')
    ]);

    Brand::create([
      'name' => 'acer'
    ]);

    Category::create([
      'name' => 'Item'
    ]);

    Product::create([
      'brand_id' => 1,
      'product_category_id' => 1,
      'stock' => rand(10, 99),
      'name' => 'acer z476'
    ]);
  }
}
