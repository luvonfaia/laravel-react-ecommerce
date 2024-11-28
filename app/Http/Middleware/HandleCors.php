<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Fruitcake\Cors\HandleCors as BaseHandleCors;

class HandleCors extends BaseHandleCors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        return parent::handle($request, $next);
    }
}
