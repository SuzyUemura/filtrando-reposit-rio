const fs = require('fs')

arquivo = ''
this.criarArquivo = (arquivo, nomeArquivo) => {
    try {
        console.log(arquivo)
        const diretorioArquivo = `./src/resultado/${nomeArquivo}.txt`
        fs.writeFileSync(diretorioArquivo, arquivo)
    } catch (error) {
        console.log(error)
    }  
}

