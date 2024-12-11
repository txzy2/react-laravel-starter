<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{

    //
    public function index()
    {
        $response = [
            'success' => true,
            'data' => [
                'message' => 'Test success'
            ]
        ];
        return response()->json($response, 200);
    }
}
