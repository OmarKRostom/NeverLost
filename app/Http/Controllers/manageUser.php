<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Salt;
use App\Login;

class manageUser extends Controller
{
    public function create() {
    	$user = new Login();
    	$user->username = "Omar";
    	$user->password = "123456";
    	$user->save();
    }
}
