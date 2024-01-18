<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PrijavaIspitaResource extends JsonResource
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
            'datum_i_vreme' => $this->resource->datum_i_vreme,
            'status_prijave' => $this->resource->status_prijave,
            'predmet_id' => new PredmetResource($this->resource->predmet),
            'user_id' => new UserResource($this->resource->user),
        ];
    }
}
