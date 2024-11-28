<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance as Middleware;

class PreventRequestsDuringMaintenance extends Middleware
{
    protected $except = [
        // Adaugă aici rutele care pot fi accesate în modul de mentenanță
    ];
}
