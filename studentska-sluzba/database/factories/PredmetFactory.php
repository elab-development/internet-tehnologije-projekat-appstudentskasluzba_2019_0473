<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Predmet>
 */
class PredmetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $predmeti1 = [
            'Osnove informaciono komunikacionih tehnologija',
            'Elektronsko poslovanje',
            'Matematika 1',
            'Ekonomija',
            'Uvod u informacione sisteme',
            'Matematika 2',
            'Principi programiranja',
        ];
        
        $predmeti2 = [
            'Teorija verovatnoće',
            'Programiranje 1',
            'Arhitektura računara i operativni sistemi',
            'Interakcija čovek-računar',
            'Strukture podataka i algoritmi',
            'Cloud infrastruktura i servisi',
            'Baze podataka',
            'Statistika'
        ];
        
        $predmeti3 = [
            'Računarske mreže i telekomunikacije',
            'Projektovanje informacionih sistema',
            'Projektovanje softvera',
            'Teorija sistema',
            'Operaciona istraživanja 1',
            'Zaštita računarskih sistema',
            'Operaciona istraživanja 2',
            'Programski jezici',
            'Veštačka inteligencija',
        ];
        
        $predmeti4 = [
            'Modelovanje poslovnih procesa',
            'Internet tehnologije',
            'Poslovna inteligencija',
            'Metodologija izrade IT projekta',
            'Stručna praksa',
            'Završni rad'
        ];

        $allPredmeti = array_merge($predmeti1, $predmeti2, $predmeti3, $predmeti4);

        // Randomly select a subject from allPredmeti
        $selectedPredmet = $this->faker->randomElement($allPredmeti);

        // Determine the group number based on the selected subject
        $groupNumber = 1;
        if (in_array($selectedPredmet, $predmeti2)) {
            $groupNumber = 2;
        } elseif (in_array($selectedPredmet, $predmeti3)) {
            $groupNumber = 3;
        } elseif (in_array($selectedPredmet, $predmeti4)) {
            $groupNumber = 4;
        }


        $profesori = [
            'dr Aleksa Santic',
            'dr Bogdan Jelic',
            'dr Michael Savic',
            'dr Dusan Mikic',
            'dr Luka Antic',
        ];

        $asistenti = [
            'Dejan Milosevic',
            'Milorad Popadic',
            'Filip Olic',
            'Mateja Pratprotnik',
            'Stevan Sremac',
        ];

        return [
            'naziv' => $selectedPredmet, 
            'opis' => $this->faker->sentence(),
            'broj_esbp_poena' => $this->faker->numberBetween($min = 4, $max = 6),
            'godina_studiranja_datog_predmeta' => $groupNumber,
            'profesor' => $this->faker->randomElement($profesori),
            'asistenti' => $this->faker->randomElement($asistenti),
        ];
    }
}
