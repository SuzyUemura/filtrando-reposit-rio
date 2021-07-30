const axios = require('axios')

async function filtrarRepositorio(url) {
    let result = await axios.get(url)
        const repos = result.data.map(r => {
            return {
                name: r.name,
                url: r.html_url,
                language: r.language
            }
        })
        return repos
}

module.exports = {filtrarRepositorio}