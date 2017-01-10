<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Jenssegers\Mongodb\Eloquent\Model as Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements
  AuthenticatableContract,
  AuthorizableContract,
  CanResetPasswordContract
{
  	use Authenticatable, Authorizable, CanResetPassword;
  	protected $fillable = [ 'username', 'password'];
  	protected $connection = 'mongodb';
    protected $collection = 'users_collection';
}