<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PredmetController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PrijavaIspitaController;
use App\Http\Controllers\PretragaController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register',[AuthController::class,'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/resetPassword', [AuthController::class,'forgotPassword']);

Route::group(['middleware' => ['auth:sanctum']], function () {

    //Mogu i studenti i administrator
    Route::get('predmeti', [PredmetController::class, 'index']);
    Route::get('predmeti/{id}', [PredmetController::class, 'show']); 

    //Moze samo administrator
    Route::resource('users', UserController::class, ['only' => ['index', 'show']]);
    Route::post('/predmeti', [PredmetController::class,'store']);
    Route::delete('/predmeti/{id}', [PredmetController::class,'destroy']);
    Route::get('/pretragaPoNazivu', [PretragaController::class, 'pretragaPoNazivu']);

    //Mogu samo studenti
    Route::post('/prijave_ispita', [PrijavaIspitaController::class,'store']);
    Route::put('/prijave_ispita/{id}', [PrijavaIspitaController::class,'update']);
    Route::patch('/prijave_ispita/{id}', [PrijavaIspitaController::class,'updateStatus']);
    Route::delete('/prijave_ispita/{id}', [PrijavaIspitaController::class,'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']); 
}); 
