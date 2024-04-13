<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', 'LoginController@index');
Route::get('/dashboard', 'DashboardController@index');

Route::get('/settings/profile', [SettingsController::class, 'profile']);
Route::get('/settings/security', [SettingsController::class, 'security']);
Route::get('/settings/security/tokens', [SettingsController::class, 'tokens']);
Route::get('/settings/security/verification', [SettingsController::class, 'verification']);
Route::get('/settings/security/recent-devices', [SettingsController::class, 'devices']);
Route::get('/settings/preferences', [SettingsController::class, 'preferences']);
Route::get('/settings/email', [SettingsController::class, 'email']);
Route::get('/settings/connected-apps', [SettingsController::class, 'connectedApps']);


Route::get('users', [UserController::class, 'index']);
Route::get('users/get', [UserController::class, 'get']);
Route::get('users/detail', [UserController::class, 'detail']);
Route::get('users/add', [UserController::class, 'add']);
Route::get('users/update', [UserController::class, 'update']);
Route::get('users/delete', [UserController::class, 'destroy']);

Route::get('/departments', 'DepartmentsController@index');
Route::get('/positions', 'PositionsController@index');
