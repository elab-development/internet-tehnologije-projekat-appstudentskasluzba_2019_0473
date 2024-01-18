<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Predmet extends Model
{
    use HasFactory;

    protected $table = 'predmeti';

    protected $fillable = [
        'naziv',
        'opis', 
        'broj_esbp_poena',
        'godina_studiranja_datog_predmeta',
        'profesor',
        'asistenti',
    ];

    public function prijaveIspita() {
        return $this->hasMany(PrijavaIspita::class);
    }
}
