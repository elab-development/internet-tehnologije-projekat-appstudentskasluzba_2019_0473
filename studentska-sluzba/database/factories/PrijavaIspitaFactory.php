<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\User;
use App\Models\Predmet;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PrijavaIspita>
 */
class PrijavaIspitaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $statusi = [
            'Odobrena', 'Odbijena', 'Neobradjena',
        ];

        return [
            'datum_i_vreme' => $this->faker->dateTimeBetween('-30 days', 'now'), 
            'status_prijave' => $this->faker->randomElement($statusi),
            'predmeti_id' => Predmet::factory(),
            'user_id' => User::factory(),
        ];
    }
}
