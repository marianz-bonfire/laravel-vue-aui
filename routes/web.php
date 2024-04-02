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
Route::get('users/list', [UserController::class, 'list']);
Route::get('users/add', [UserController::class, 'add']);
Route::get('users/update', [UserController::class, 'update']);
Route::get('users/delete', [UserController::class, 'destroy']);

Route::get('/branches', 'BranchesController@index');
Route::get('/branches/detail', 'BranchesController@detail');
Route::get('/branches/view-key', 'BranchesController@viewKey');
Route::get('/branches/assign-branch-admin', 'BranchesController@assignBranchAdmin');
Route::get('/branches/system-time-logs', 'BranchesController@systemTimeLogs');

Route::get('/departments', 'DepartmentsController@index');
Route::get('/positions', 'PositionsController@index');
Route::get('/holidays', 'HolidaysController@index');

Route::get('/roles', 'RolesController@index');
Route::get('/roles/detail', 'RolesController@detail');
Route::get('/roles/permissions', 'RolesController@permissions');

Route::get('/employees', 'EmployeesController@index');
Route::get('/employees/detail', 'EmployeesController@detail');
Route::get('/employees/assign-employee', 'EmployeesController@assignEmployee');

Route::get('/employee-schedules', 'EmployeeSchedulesController@index');
Route::get('/employee-schedules/detail', 'EmployeeSchedulesController@detail');

Route::get('/user', 'UserController@index');
Route::get('/user/detail', 'UserController@detail');
Route::get('/user/permissions', 'UserController@permissions');

Route::get('/time-keeping', 'TimeKeepingController@index');
Route::get('/time-corrections', 'TimeCorrectionsController@index');

Route::get('/administrative/permissions', 'AdministrativeModulesController@permissions');
Route::get('/administrative/access-codes', 'AdministrativeModulesController@accessCodes');

Route::get('/admin/settings', 'AdministratorController@adminSettings');
Route::get('/admin/audits', 'AdministratorController@audits');
