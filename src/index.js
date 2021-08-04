const repositorio = require('./repositorio')
const user = require('./user')
const upload = require('./upload')
const servicos = require('./servicos');

const usuario = 'suzyUemura'

async function main() {
  servicos.getUser(usuario).then((result) => {
    const usr = user.filtro(result.data);
    upload.criarArquivo(usr, 'usuario');
    console.log('Usuário filtrado com sucesso!');
  }).catch((err) => {
    console.log(`Erro ao filtrar Usuário: ${err}`);
  });

  servicos.getRepos(usuario).then((result) => {
    const repos = repositorio.filtro(result.data);
    upload.criarArquivo(repos, usuario);
    console.log('Repositórios filtrados com sucesso!');
  }).catch((err) => {
    console.log(`Erro ao filtrar Repositórios: ${err}`);
  });
}

main();






