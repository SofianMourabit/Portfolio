var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')
        .copy('vendor/animated-headline/css', 'public/css/style.css')
        .copy('vendor/animated-headline/css', 'public/css/')
        .copy('vendor/animated-headline/js/main.js', 'public/js/main-headline.js')
        .copy('vendor/animated-headline/js/modernizr.js', 'public/js/modernizr.js')
        .scripts([
            "modernizr.js",
            "main-headline.js"
        ])
        .stylesIn("public/css");
});