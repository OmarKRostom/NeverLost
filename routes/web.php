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

Route::group(['prefix' => 'dashboard','middleware' => 'auth'], function () {
    Route::get('/sites/home','manageData@viewHome'); //View all saved sites
    Route::get('/sites/new','manageData@viewAddSite'); // View add site page
    Route::post('/sites/addSite','manageData@addSite'); // Add site post request
    Route::get('/sites/getSites','manageData@getSites'); // Get all saved sites "Encrypted"
    Route::get('/sites/modify/{id}', 'manageData@viewModifySite'); //View modify existing data
    Route::post('/sites/modifySite','manageData@modifySite'); //Update Site
    Route::get('/test',function() {
    	return session('passphrase');
    });
});

Route::group([],function() {
	Route::post('/login','manageUser@login');
	Route::get('/logout','manageUser@logout');
	Route::post('/register','manageUser@register');
	Route::get('/welcome','manageUser@welcome');
});

Route::get('/createUser','manageUser@create');
