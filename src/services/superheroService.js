export async function buscarHeroiPorNome(nome) {
    
  const response = await fetch(
    `https://superheroapi.com/api.php/70a0fb6db1bb1fd1afe846579f880e0a/search/${nome}`
  )

  const dados = await response.json()

  if (dados.response === "error") {
    throw new Error("Herói não encontrado")
  }

  return dados.results[0]
}