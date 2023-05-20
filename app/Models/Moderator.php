<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Moderator extends Model
{
	use HasFactory;

	protected $fillable = ['email', 'password'];

	protected $hidden = ['password'];

	public function setPasswordAttribute(string $value)
	{
		$this->attributes['password'] = Hash::make($value);
	}
}
