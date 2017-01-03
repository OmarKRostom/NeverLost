<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Login extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'login_collection';
}
