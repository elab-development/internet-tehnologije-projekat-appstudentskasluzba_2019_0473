<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'=>"Administrator studentske sluzbe",
            'email'=>"admin@administrator.fon.bg.ac.rs",
            'password' =>  "admin",
            'jeAdmin' => true,
            'remember_token' => Str::random(10),
            'broj_indeksa' => 'nema',
        ]);

        User::factory()->times(5)->create();
    }
}
