const argv = require("./config/yargs");
const { crearArchivoPromesa } = require("./helpers/multiplicar.js");
const { crearArchivoAsync } = require("./helpers/multiplicar.js");
const colors = require('colors');

console.clear();
console.log( argv );
//console.log(base);





//const base = 6;

crearArchivoAsync( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
