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
            'Основе информационо комуникационих технологија',
            'Електронско пословање',
            'Математика 1',
            'Економија',
            'Увод у информационе системе',
            'Математика 2',
            'Принципи програмирања',
        ];

        $predmeti2 = [
            'Теорија вероватноће',
            'Програмирање 1',
            'Архитектура рачунара и оперативни системи',
            'Интеракција човек-рачунар',
            'Структуре података и алгоритми',
            'Cloud инфраструктура и сервиси',
            'Базе података',
            'Статистика'
        ];

        $predmeti3 = [
            'Рачунарске мреже и телекомуникације',
            'Пројектовање информационих система',
            'Пројектовање софтвера',
            'Теорија система',
            'Операциона истраживања 1',
            'Заштита рачунарских система',
            'Операциона истраживања 2',
            'Програмски језици',
            'Вештачка интелигенција',
        ];

        $predmeti4 = [
            'Моделовање пословних процеса',
            'Интернет технологије',
            'Пословна интелигенција',
            'Методологија израде ИТ пројекта',
            'Стручна пракса',
            'Завршни рад'
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
