// const argv = require('./config/config').argv
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion para encontrar y conocer su clima',
            demand: true
        }
    })
    .argv;


lugar.getLugarLatLon(argv.direccion)
    .then(resp => { console.log(resp); });