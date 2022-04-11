<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
  public function login(Request $req)
  {
    try {
      $result = Validator::make($req->all(), [
        'username' => ['required', 'string', 'email'],
        'password' => ['required', 'string'],
      ]);

      if ($result->fails())
        throw new Exception('form cannot be empety');

      $data = [
        'grant_type' => 'password',
        'client_id' => 2,
        'client_secret' => 'QiFxMxFtbcf7b1yLkDGqxgfcUeYHzqGjytrrhngd',
        'username' => $req->username,
        'password' => $req->password
      ];

      $httpRequest = app()->handle(
        Request::create('/oauth/token', 'POST', $data)
      );

      $result = json_decode($httpRequest->getContent());

      if ($httpRequest->getStatusCode() !== 200)
        throw new Exception($result->message);

      return response()->json($result, 200);
    } catch (\Exception $e) {
      return response()->json($e->getMessage(), 404);
    }
  }

  public function register(Request $req)
  {
    try {
      $result = Validator::make($req->all(), [
        'name' => ['required', 'max:100'],
        'email' => ['required', 'email'],
        'role' => ['required'],
        'password' => ['required']
      ]);

      if ($result->fails())
        throw new Exception('form cannot be empty');

      $return = User::create([
        'name' => $req->name,
        'email' => $req->email,
        'role' => $req->role,
        'password' => bcrypt($req->password)
      ]);

      return response()->json(['name' => $req->name], 200);
    } catch (\Exception $e) {
      return response()->json(['msg' => $e->getMessage()], 404);
    }
  }

  public function me(Request $req)
  {
    try {
      return response()->json($req->user('api'));
    } catch (\Exception $e) {
      return response()->json(['msg' => $e->getMessage()], 500);
    }
  }

  public function logout(Request $req)
  {
    try {
      return response()->json(
        $req->user('api')
          ->token()
          ->revoke()
      );
    } catch (Exception $e) {
      return response()->json(['msg' => $e->getMessage()], 500);
    }
  }
}
