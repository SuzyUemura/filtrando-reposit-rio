const fs = require('fs')

function criarArquivo(arquivo, nomeArquivo) {
  try {
    const diretorioArquivo = `./src/resultado/${nomeArquivo}.txt`
    fs.writeFileSync(diretorioArquivo, JSON.stringify(arquivo))
  } catch (error) {
    throw error;
  }
}

module.exports = { criarArquivo }
