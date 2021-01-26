const mix = require('laravel-mix')

mix.disableNotifications()

mix
    .js('static/src/js/app.js', 'static/dist/js')
    .sass('static/src/scss/app.scss', 'static/dist/css')