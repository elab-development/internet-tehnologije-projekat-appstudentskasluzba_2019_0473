<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PredmetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'opis' => $this->resource->opis,
            'broj_esbp_poena' => $this->resource->broj_esbp_poena,
            'godina_studiranja_datog_predmeta' => $this->resource->godina_studiranja_datog_predmeta,
            'profesor' => $this->resource->profesor,
            'asistenti' => $this->resource->asistenti,
        ];
    }
}
