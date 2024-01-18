<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    //fja za registraciju
    public function register(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'name'=>'required|string',
            'email'=>'required|string|email|unique:users',
            'password'=>'required|string',
            'broj_indeksa'=>'required|string|regex:/^\d+\/\d+$/'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'broj_indeksa'=>$request->broj_indeksa,
        ]);

        $token=$user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'Poruka' => 'Uspesna registracija.',
            'user'=>$user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    //fja za logovanje na app
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['Greska:', $validator->errors()]);
        }

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['Poruka'=>'Parametri za prijavu su pogresni.'], 401);
        }

        $user = User::where('email', $request['email']) -> firstOrFail();



        $token = $user->createToken('auth_token')->plainTextToken;

        if($user->email == 'admin@administrator.fon.bg.ac.rs'){
            return response()->json([
                'Poruka' => 'Uspesno ste se prijavili kao administrator!',
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        }

        return response()->json([
            'Poruka' => 'Uspesna prijava studenta.',
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    //fja za logout
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['Poruka'=> 'Uspesna odjava.']);
    }
}
