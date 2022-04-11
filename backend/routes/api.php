<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BrandController as Brand;
use App\Http\Controllers\ProductCategoryController as ProductCategory;
use App\Http\Controllers\ProductController as Product;
use App\Http\Controllers\AuthController as Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('v1')->group(function () {
  Route::controller(Auth::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/register', 'register');
  });

  Route::post('/test', function () {
    return response()->json(['test' => 'testing api']);
  });

  Route::middleware('auth:api')->group(function () {
    Route::controller(Product::class)->group(function () {
      Route::get('/product', 'index');
    });
    Route::controller(Auth::class)->group(function () {
      Route::get('/me', 'me');
      Route::post('logout', 'logout');
    });
  });
});
