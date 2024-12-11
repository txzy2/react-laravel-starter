<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::get('/test', [TestController::class, 'index']);
});

require __DIR__ . '/auth.php';
