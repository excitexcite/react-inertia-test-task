<?php

namespace Tests\Feature;

use Faker\Factory;
use Tests\TestCase;
use App\Http\Requests\StoreModeratorRequest;
use App\Models\Moderator;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StoreModeratorRequestTest extends TestCase
{
	use RefreshDatabase;

	/** @var \App\Http\Requests\StoreModeratorRequest */
	private $rules;

	/** @var \Illuminate\Validation\Validator */
	private $validator;

	public function setUp(): void
	{
		parent::setUp();

		$this->validator = app()->get('validator');

		$this->rules = (new StoreModeratorRequest())->rules();
	}

	public function validationProvider()
	{
		/* WithFaker trait doesn't work in the dataProvider */
		$faker = Factory::create(Factory::DEFAULT_LOCALE);

		return [
			'request_should_fail_when_no_email_is_provided' => [
				'passed' => false,
				'data' => [
					'password' => $faker->password()
				]
			],
			'request_should_fail_when_no_password_is_provided' => [
				'passed' => false,
				'data' => [
					'email' => $faker->safeEmail()
				]
			],
			'request_should_fail_when_email_has_more_than_255_characters' => [
				'passed' => false,
				'data' => [
					'email' => $faker->text(250) . "@test.com",
					'password' => $faker->password()
				]
			],
			'request_should_fail_when_password_has_more_than_50_characters' => [
				'passed' => false,
				'data' => [
					'email' => $faker->safeEmail(),
					'password' => $faker->paragraph()
				]
			],
			'request_should_pass_when_data_is_provided' => [
				'passed' => true,
				'data' => [
					'email' => $faker->safeEmail(),
					'password' => $faker->password()
				]
			]
		];
	}

	/**
	 * @test
	 * @dataProvider validationProvider
	 * @param bool $shouldPass
	 * @param array $mockedRequestData
	 */
	public function validation_results_as_expected($shouldPass, $mockedRequestData)
	{
		$this->assertEquals(
			$shouldPass,
			$this->validate($mockedRequestData)
		);
	}

	protected function validate($mockedRequestData)
	{
		return $this->validator
			->make($mockedRequestData, $this->rules)
			->passes();
	}
}
