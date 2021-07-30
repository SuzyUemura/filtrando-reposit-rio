const axios = require('axios')

async function filtro(urlUser) {
    let result = await axios.get(urlUser)
    result = Object.entries(result.data)
   
    const propriedadesAceitas = [
        'login',
        'id',
        'avatar_url'
    ]
    const repos = result.filter(([key]) => propriedadesAceitas.includes(key))
    return repos
}

module.exports = {filtro}