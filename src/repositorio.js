function filtro(data) {
  const repos = data.map(r => {
    return {
      name: r.name,
      url: r.html_url,
      language: r.language
    }
  })
  return repos
}

module.exports = { filtro }