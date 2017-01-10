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
        return $request->all();
    	// $site = new Site;
    	// $site->username = $request->username;
    	// $site->password = $request->password;
    	// $site->provider = $request->provider;
    	// $site->iv = $request->iv;
    	// $site->salt = $request->salt;
    	// $site->save();
    }

    public function getSites() {
    	return Site::all();
    }

    public function viewModifySite($id) {
    	return view('modifySite')->with('providers',Provider::all());
    }

    public function modifySite(Request $request) {

    }
}
