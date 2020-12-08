const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion para encontrar y conocer su clima',
            demand: true
        }
    })
    .argv;


module.exports = {
    argv
}