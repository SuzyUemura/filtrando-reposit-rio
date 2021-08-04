const axios = require('axios');

const constantes = require('./constantes');

async function getUser(userName) {
  console.log()
  return await axios.get(constantes.gitHubApiBaseURL + userName);
}


async function getRepos(userName) {
  return await axios.get(`${constantes.gitHubApiBaseURL + userName}/repos`);
}

module.exports = {
  getUser,
  getRepos,
}