<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'email' => $this->resource->email,
             
        ];

        if ($this->resource->jeAdmin) {
            $data['korisnicka_uloga'] = 'Ovaj korisnik je administrator.';
            return $data;
        }else{
            $data['broj_indeksa'] = $this->resource->broj_indeksa;
            $data['korisnicka_uloga'] = 'Ovaj korisnik je student.';
            return $data;
        }
    }
}
