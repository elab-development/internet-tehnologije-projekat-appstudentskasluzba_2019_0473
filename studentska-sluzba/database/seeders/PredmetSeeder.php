<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Predmet;

class PredmetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Predmet::factory()->create([
            'naziv' => 'Економија',
        ]);

        Predmet::factory()->times(5)->create();
    }
}
