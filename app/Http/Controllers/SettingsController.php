<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function profile()
    {
        return view('settings.profile');
    }

    public function security()
    {
        return view('settings.security');
    }

    public function preferences()
    {
        return view('settings.security-preferences');
    }

    public function tokens()
    {
        return view('settings.security-tokens');
    }

    public function verification()
    {
        return view('settings.security-verification');
    }

    public function devices()
    {
        return view('settings.security-recent-devices');
    }

    public function email()
    {
        return view('settings.email');
    }

    public function connectedApps()
    {
        return view('settings.connected-apps');
    }
}
