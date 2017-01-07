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

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'dashboard'], function () {
    Route::get('/sites/home','manageData@viewHome'); //View all saved sites
    Route::get('/sites/new','manageData@viewAddSite'); // View add site page
    Route::post('/sites/addSite','manageData@addSite'); // Add site post request
});

Route::get('/createUser','manageUser@create');
