<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Salt;
use App\Login;
use App\User;

use Hash;
use Auth;
use DB;

class manageUser extends Controller
{
    public function login(Request $request) {
		session(['passphrase' => $request->password]);
        session(['authUser' => $request->username]);
  		if (Auth::attempt(['username' => hash('sha512', $request->username), 'password' => $request->password])) {
        	return response()->json(['success' => 'user_authenticated','token' => csrf_token()], 200);
		} else {
			return response()->json(['success' => 'incorrect_username'],401);
		}
    }

    public function register(Request $request) {
    	if(!User::where("username", "=", hash('sha512', $request->username))->get()->isEmpty()) {
    		return response()->json(['error' => 'user_already_registered'], 402);
    	} else {
    		$user = new User;
    		session(['passphrase' => $request->password]);
            session(['authUser' => $request->username]);
	    	$user = User::create([
	            'username'  => hash('sha512', $request->username),
	            'password' 	=> bcrypt($request->password),
	        ]);
	    	Auth::login($user);
	    	return response()->json(['success' => 'user_registerd','token'=>csrf_token()], 200);
    	}
    }

    public function logout() {
    	Auth::logout();
    	return redirect('/welcome');
    }

    public function welcome() {
    	return view('login');
    }
}
