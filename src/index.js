const filtro = require('./filtrarRepositorio')
const upload = require('./upload')

const user = 'suzyUemura'
const url = `https://api.github.com/users/${user}/repos?`

async function filtrarRepositorio() {
    try {
       return await filtro.filtrarRepositorio(url)
    }
    catch (err) {
        throw {
            status: err.response.status,
            message: err.response.data.errors,
        }
    }
}

function escreverArquivo() {

    return new Promise(resolve => {
        filtrarRepositorio()
            .then(result => {
                upload.criarArquivo(JSON.stringify(result), user)
            })
    resolve() 
    })    
}

escreverArquivo()







