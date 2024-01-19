<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Predmet;
use App\Http\Resources\PredmetResource;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

class PretragaController extends Controller
{
    public function pretragaPoNazivu(Request $request)
    {

        $jeAdmin = Auth::user()->jeAdmin;
        if(!$jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Samo administrator moze pretrazivati predmete po nazivu!'], 403);
        }
     
        $query = Predmet::query();


        if ($request->has('naziv')) {
            $query->where('naziv', 'like', '%' . $request->input('naziv') . '%');
        }

        $page = $request->input('stranica', 1);
        $perPage = 2;

        $usluge = $query->orderBy('naziv')->paginate($perPage, ['*'], 'stranica', $page);

        if($usluge->isEmpty()){
            return response()->json(['Poruka' => 'Ne postoje predmeti sa tim nazivom.'], 404);
        }
        return response()->json(['Trenutna stranica: ' => $usluge->currentPage(), 'Poslednja stranica:' => $usluge->lastPage(),
         'Pronadjeni predmeti sa unetim nazivom:' => PredmetResource::collection($usluge)], 200);
    }
}
