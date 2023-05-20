<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditModeratorRequest;
use App\Http\Requests\StoreModeratorRequest;
use Inertia\Inertia;
use App\Models\Moderator;

class ModeratorController extends Controller
{
	public function index()
	{
		return Inertia::render('Settings/Index', [
			'moderators' => Moderator::paginate(10)->through(fn ($moderator) => [
				'id' => $moderator->id,
				'email' => $moderator->email,
				'created_at' => $moderator->created_at
			])
		]);
	}

	public function store(StoreModeratorRequest $request)
	{
		Moderator::create($request->validated());
	}

	public function destroy(Moderator $moderator)
	{
		$moderator->delete();
		return to_route('settings');
	}

	public function edit(Moderator $moderator)
	{
		return Inertia::render('Settings/Edit', ['moderator' => [
			'id' => $moderator->id,
			'email' => $moderator->email
		]]);
	}

	public function update(EditModeratorRequest $request, Moderator $moderator)
	{
		$moderator->update($request->validated());
		return to_route('settings');
	}
}
