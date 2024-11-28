<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Broadcast;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Broadcast::routes();

        /*
         * You can customize the authentication logic for broadcast channels in this file:
         * routes/channels.php
         */
        require base_path('routes/channels.php');
    }
}
