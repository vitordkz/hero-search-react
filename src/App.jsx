import { useState } from "react"
import { buscarHeroiPorNome } from "./services/superheroService"

function App() {
  // Estados da interface
  const [nome, setNome] = useState("")
  const [heroi, setHeroi] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  // Função que controla o fluxo da busca
  async function buscarHeroi() {

    if (!nome.trim()) {
  setErro("Digite o nome de um herói")
  
  return
}

    try {
      setLoading(true)
      setErro(null)

      const dados = await buscarHeroiPorNome(nome)

      setHeroi(dados)
    } catch (err) {
      setErro("Herói não encontrado")
      setHeroi(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Heroes Search</h1>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite um herói"
      />

      <button onClick={buscarHeroi} style={{ marginLeft: "10px" }}>
        Buscar
      </button>

      {loading && <p>Carregando...</p>}

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {heroi && (
        <div style={{ marginTop: "20px" }}>
          <h2>{heroi.name}</h2>
        </div>
      )}
    </div>
  )
}

export default App