<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Provider extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'provider_collection';
}
