<?php

use App\Http\Controllers\ModeratorController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
	return to_route('settings');
});

Route::controller(ModeratorController::class)->group(function () {
	Route::get('/settings', 'index')->name('settings');
	Route::post('/settings', 'store')->name('settings.store');
	Route::patch('/settings/{moderator}', 'update')->name('settings.update');
	Route::get('/settings/{moderator}/edit', 'edit')->name('settings.edit');
	Route::delete('/settings/{moderator}', 'destroy')->name('settings.delete');
});

Route::fallback(function () {
	return to_route('settings');
});
