<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\PrijavaIspita;

class PrijavaIspitaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 6; $i++) {
            PrijavaIspita::factory()->create([
                'predmet_id' => rand(1,6),
                'user_id' => rand(2,6),
            ]);
        }
    }
}
