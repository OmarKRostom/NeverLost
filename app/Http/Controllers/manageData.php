<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Provider;
use App\Site;

class manageData extends Controller
{
    public function viewHome() {
    	return view('content');
    }

    public function viewAddSite() {
    	return view('addSite')->with('providers',Provider::all());
    }

    public function addSite(Request $request) {
    	$site = new Site;
    	$site->username = $request->username;
    	$site->password = $request->password;
    	$site->provider = $request->provider;
    	$site->save();
    }
}
