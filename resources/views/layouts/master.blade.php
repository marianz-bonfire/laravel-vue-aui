<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>
            @if (View::hasSection('title'))
                AUI - @yield('title')
            @else
                AUI
            @endif
        </title>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script>
            document.getElementsByTagName("html")[0].style.visibility = "hidden";
        </script>
    </head>
    <body>
        <core>
            <va-app id="app"
                :desktop-sidebar-width="config.desktopSidebarWidth"
                :desktop-minibar-width="config.desktopMinibarWidth"
                :desktop-topbar-height="config.desktopTopbarHeight"
                
                :mobile-sidebar-width="config.mobileSidebarWidth"
                :mobile-minibar-width="config.mobileMinibarWidth"
                :mobile-topbar-height="config.mobileTopbarHeight"
                
                :sidebar-priority="config.sidebarPriority"
                :minibar-priority="config.minibarPriority"
                :topbar-priority="config.topbarPriority"
                :topbar-padded="config.topbarPadded"
                :reverse="config.reverse"
                :split="config.split"
                :rtl="config.rtl">

                <top-bar></top-bar>
                <mini-bar></mini-bar>
                <side-bar :groups="sidebar.groups"></side-bar>

                @yield('content')

                <va-aside :placement="config.asidePlacement" ref="rigthAside" key="rigthAside">
                    <side-content></side-content>
                </va-aside>
            
            </va-app>
        </core>
        <script>
            document.getElementsByTagName("html")[0].style.visibility = "visible";
        </script>
    </body>
</html>