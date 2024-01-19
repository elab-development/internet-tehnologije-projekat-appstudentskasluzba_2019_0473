<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\PredmetResource;
use App\Models\Predmet;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class PredmetController extends Controller
{
    public function index()
    {
        $predmeti = Predmet::all();
        return PredmetResource::collection($predmeti);
    }


    public function show($id)
    {
        $predmet = Predmet::findOrFail($id);
        return new PredmetResource($predmet);
    }

    public function store(Request $request)
    {
        $jeAdmin = Auth::user()->jeAdmin;
        if(!$jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Samo administrator moze dodati novi predmet!'], 403);
        }

        // Validacija za polja koja se unose preko requesta
        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
            'opis' => 'required',
            'broj_esbp_poena' => 'required',
            'godina_studiranja_datog_predmeta' => 'required',
            'profesor' => 'required',
            'asistenti' => 'required',
        ]);

        // Provera validacije
        if ($validator->fails()) {
            return response()->json(['Greska' => $validator->errors()], 400);
        }


        $predmet = new Predmet();
        $predmet->naziv = $request->naziv;
        $predmet->opis = $request->opis;
        $predmet->broj_esbp_poena = $request->broj_esbp_poena;
        $predmet->godina_studiranja_datog_predmeta = $request->godina_studiranja_datog_predmeta;
        $predmet->profesor = $request->profesor;
        $predmet->asistenti = $request->asistenti;

        $predmet->save();

        return response()->json(['Poruka' => 'Uspesno ste dodali novi predmet!!!', 
            'Novi predmet: ' => new PredmetResource($predmet)]);

    }

    public function destroy($id)
    {
        $jeAdmin = Auth::user()->jeAdmin;
        if(!$jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Samo administrator moze obrisati predmet!'], 403);
        }

        $predmet = Predmet::findOrFail($id);
        $predmet->delete();

        return response()->json(['Poruka' => 'Predmet je uspesno obrisan.']);
    }

}
