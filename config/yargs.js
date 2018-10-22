const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea la tabla deseada y graba el archivo con esa informacion', opt)
    .help()
    .argv;

module.exports = {
    argv
}