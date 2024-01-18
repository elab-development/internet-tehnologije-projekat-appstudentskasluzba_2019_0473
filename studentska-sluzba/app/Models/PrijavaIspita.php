<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrijavaIspita extends Model
{
    use HasFactory;

    protected $table = 'prijava_ispita';

    protected $fillable = [
       'datum_i_vreme',
       'status_prijave',
    ];

    public function predmet() {
        return $this->belongsTo(Predmet::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

}
