<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrijavaIspita extends Model
{
    use HasFactory;

    protected $table = 'prijave_ispita';

    protected $fillable = [
       'datum_i_vreme',
       'status_prijave',
       'predmet_id',
       'user_id',
    ];

    public function predmet() {
        return $this->belongsTo(Predmet::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

}
