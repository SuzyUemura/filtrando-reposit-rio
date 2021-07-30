const repositorio = require('./repositorio')
const user = require('./user')
const upload = require('./upload')

const usuario = 'suzyUemura'
const url = `https://api.github.com/users/${usuario}/repos?`
const urlUser = `https://api.github.com/users/${usuario}`

async function filtrarRepositorio() {
    try {
        return await repositorio.filtro(url)
    }
    catch (err) {
        throw 'Erro ao filtrar repositório'
    }
}

async function filtrarUser() {
    try {
        return await user.filtro(urlUser)
    } catch (error) {
        throw 'Erro ao filtrar usuario'
    }
}

function escreverRepositorio() {

    return new Promise(resolve => {
        filtrarRepositorio()
            .then(result => {
                upload.criarArquivo(JSON.stringify(result), user)
            })
        resolve()
    })
}

function escreverUser() {
    return new Promise(resolve => {
        filtrarUser()
            .then(result => {
                upload.criarArquivo(JSON.stringify(result), 'usuario')
            })
        resolve() 
    })
}
escreverRepositorio()
escreverUser()







