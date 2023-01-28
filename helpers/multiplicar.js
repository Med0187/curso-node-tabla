
const fs = require("fs");
const { argv } = require("process");
const colors = require('colors');

const crearArchivoPromesa = ( base, listar = false, hasta  ) => {
    return new Promise (( resolve, reject ) => {
    
        if ( listar ) {
    console.log("**************".green)
    console.log('  Tabla del: ', base.red, ' hasta', hasta.red )
    console.log("**************".blue)
    }
    let salida = ''
    for (let i=1; i<=10;i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    if ( listar ) {
    console.log(salida);
    }
    fs.writeFileSync( `tabla-${base}.text`, salida)

    resolve(`tabla-${ base }.text`)

})
}

const crearArchivoAsync = async ( base, listar=false, hasta ) => {
    try {
        
        let salida = '';
        let consola = '';
        for (let i=1; i<=hasta;i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${base * i}\n`;
        }
        if ( listar ) {
            console.log("**************".green)
            console.log('  Tabla del: '.green, colors.red(base), ' Hasta: '.green, colors.red(hasta));
            console.log("**************".green)
            console.log(consola);
        }    
        fs.writeFileSync( `./salida/tabla-${base}.text`, salida)
    
        return `tabla-${ base }.text`;
    } catch (err) {
        throw err;
  }
}


module.exports = { crearArchivoPromesa };
module.exports = { crearArchivoAsync }



