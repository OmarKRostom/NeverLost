<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Salt extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'salt_collection';
}
