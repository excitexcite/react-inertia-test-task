<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RequestsTest extends TestCase
{
	public function test_the_application_returns_a_successful_response(): void
	{
		$response = $this->get('/settings');

		$response->assertStatus(200);
	}

	public function test_the_application_return_a_redirect_response(): void
	{
		$response = $this->get('/');
		$response->assertStatus(302);

		$response = $this->get('/asfagagasgasg');
		$response->assertStatus(302);
	}
}
