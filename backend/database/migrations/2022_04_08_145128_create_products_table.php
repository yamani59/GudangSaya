<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('products', function (Blueprint $table) {
      $table->id();
      $table->bigInteger('brand_id')->unsigned();
      $table->bigInteger('product_category_id')->unsigned();
      $table->integer('stock');
      $table->string('name', 100);
      $table->timestamps();

      $table->foreign('brand_id')
        ->references('id')
        ->on('brands');
      $table->foreign('product_category_id')
        ->references('id')
        ->on('product_categories');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('products');
  }
};
