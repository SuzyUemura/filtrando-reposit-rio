function filtro(data) {
  return {
      login: data.login,
      id: data.id,
      avatar_url: data.avatar_url,
  };
}

module.exports = { filtro }