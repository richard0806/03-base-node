/*requireds*/
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 12) => {
    let data = '';
    data += `*********************\n`.green;
    data += `Tabla del ${ base }\n`.green;
    data += `*********************\n`.green;
    for (let i = 1; i <= limite; i++) {
        data += `${ base} * ${ i } = ${ base * i}\n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite = 12) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } No es un numero`);
            return;
        }

        let data = '';
        data += `***************************************\n`.red;
        data += `Tabla del ${ base }\n`.red;
        data += `***************************************\n`.red;
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${ base }-al-${ limite }.txt`.green);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}