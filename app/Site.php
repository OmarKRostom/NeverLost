<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Site extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'sties_collection';
}
