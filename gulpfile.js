const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss')
    	.styles([
    		'bootstrap.min.css',
    		'raleway.css',
    		'../admin/css/AdminLTE.css',
    		'../admin/css/font-awesome.min.css',
    		'../admin/css/ionicons.min.css',
    		'../admin/css/skins/_all-skins.css',
    		'main-theme.css'
    	])
   		.webpack('app.js')
   		.scripts([
   			'../admin/js/app.js',
        'aes_new.js',
        'pbkdf2_new.js'
   		]);
});
