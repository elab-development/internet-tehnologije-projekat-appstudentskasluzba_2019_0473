<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Http\Resources\PrijavaIspitaResource;
use App\Models\PrijavaIspita;

use Carbon\Carbon;

class PrijavaIspitaController extends Controller
{
    public function store(Request $request)
    {
        $user_id = Auth::user()->id;
        // Validacija za polja koja se unose preko requesta
        $validator = Validator::make($request->all(), [
            'status_prijave' => 'required',
            'predmet_id' => 'required',
        ]);

        // Provera validacije
        if ($validator->fails()) {
            return response()->json(['Greska' => $validator->errors()], 400);
        }

        $jeAdmin = Auth::user()->jeAdmin;
        if($jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Administrator ne moze prijaviti ispit!'], 403);
        }

        $prijava_ispita = new PrijavaIspita();
        $prijava_ispita->datum_i_vreme = Carbon::now()->format('Y-m-d H:i:s');;
        $prijava_ispita->status_prijave = $request->status_prijave;
        $prijava_ispita->predmet_id = $request->predmet_id;
        $prijava_ispita->user_id = $user_id;

        $prijava_ispita->save();

        return response()->json(['Poruka' => 'Uspesno ste prijavili ispit!!!', 
            'Prijava ispita: ' => new PrijavaIspitaResource($prijava_ispita)]);

    }

    public function update(Request $request, $id)
    {

            $user_id = Auth::user()->id;

            // Validacija za polja koja se unose preko requesta
            $validator = Validator::make($request->all(), [
                'predmet_id' => 'required',
                'status_prijave' => 'required',
            ]);

            // Provera validacije
            if ($validator->fails()) {
                return response()->json(['Greska' => $validator->errors()], 400);
            }

            $jeAdmin = Auth::user()->jeAdmin;
            if($jeAdmin){
                return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Administrator ne moze izmeniti prijavu ispita!'], 403);
            }

            $prijava_ispita = PrijavaIspita::findOrFail($id);
            if($prijava_ispita->user_id != $user_id){
                return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Korisnik nije autor prijave!'], 403);
            }

            $prijava_ispita->predmet_id = $request->predmet_id;
            $prijava_ispita->status_prijave = $request->status_prijave;
            $prijava_ispita->datum_i_vreme = Carbon::now()->format('Y-m-d H:i:s');;

            $prijava_ispita->save();

            return response()->json(['Poruka' => 'Prijava ispita je uspesno izmenjena!', 'PrijavaIspita: ' => new PrijavaIspitaResource($prijava_ispita)]);
    }

    public function updateStatus(Request $request, $id)
    {
            $user_id = Auth::user()->id;

            // Validacija za polja koja se unose preko requesta
            $validator = Validator::make($request->all(), [
                'status_prijave' => 'required',
            ]);

            // Provera validacije
            if ($validator->fails()) {
                return response()->json(['Greska' => $validator->errors()], 400);
            }

            $jeAdmin = Auth::user()->jeAdmin;
            if($jeAdmin){
                return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Administrator ne moze izmeniti prijavu ispita!'], 403);
            }

            $prijava_ispita = PrijavaIspita::findOrFail($id);
            if($prijava_ispita->user_id != $user_id){
                return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Korisnik nije autor prijave!'], 403);
            }

            $prijava_ispita->status_prijave = $request->status_prijave;

            $prijava_ispita->save();

            return response()->json(['Poruka' => 'Status prijave ispita je uspesno izmenjen!', 'Prijava ispita:' => new PrijavaIspitaResource($prijava_ispita)]);
    }

    public function destroy($id)
    {
        $user_id = Auth::user()->id;

        $prijava_ispita = PrijavaIspita::findOrFail($id);

        if($prijava_ispita->user_id != $user_id){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Korisnik nije autor ove prijave!'], 403);
        }

        $jeAdmin = Auth::user()->jeAdmin;
        if($jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Administrator ne moze obrisati prijavu ispita!'], 403);
        }

        $prijava_ispita->delete();

        return response()->json(['Poruka' => 'Prijava ispita je uspesno obrisana.']);
    }
}
