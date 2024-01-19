<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\UserResource;
use App\Models\User;

use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $jeAdmin = Auth::user()->jeAdmin;
        if(!$jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Samo administrator moze videti sve korisnike!'], 403);
        }
        $users = User::all();
        return UserResource::collection($users);
    }


    public function show($id)
    {
        $jeAdmin = Auth::user()->jeAdmin;
        if(!$jeAdmin){
            return response()->json(['Greska' => 'PRISTUP ZABRANJEN: Samo administrator moze videti odredjenog korisnika!'], 403);
        }
        $user = User::findOrFail($id);
        return new UserResource($user);
    }
}
