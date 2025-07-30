import { useState } from "react";
import style from "./Funcionalidades.module.css";
import Form from "../Form/Form.tsx";
import { buscarPorAtor, buscarPorDiretor, buscarPorGenero, buscarPorPersonagem, buscarPorTitulo } from "../../services.tsx";
function Funcionalidades(props: {
  nomePagina: string,
  setResultados: (resultados: any[]) => void
}) {
  const tipoObra = props.nomePagina === "Filmes" ? "filmes" : "series";

  const [personagem, setPersonagem] = useState("");
  const [titulo, setTitulo] = useState("");
  const [diretor, setDiretor] = useState("");
  const [ator, setAtor] = useState("");
  const [generos, setGeneros] = useState<string[]>([]);
  async function buscarPersonagem() {
    const resultados = await buscarPorPersonagem(tipoObra, personagem);
    props.setResultados(resultados);
    }
  async function buscarTitulo(){
    const resultados = await buscarPorTitulo(tipoObra, titulo);
    props.setResultados(resultados);
  }

  async function buscarDiretor(){
    const resultados = await buscarPorDiretor(diretor);
    props.setResultados(resultados);
  }

  async function buscarAtor(){
    const resultados = await buscarPorAtor(tipoObra, ator);
    props.setResultados(resultados);
  }

  async function buscarGenero(){
    const resultados = await buscarPorGenero(tipoObra, generos);
    props.setResultados(resultados);
  }
  return (
    <div className={style["funcionalidades"]}>
    <h1>{props.nomePagina}</h1>
    <h4>Utilize um filtro por vez</h4>
  <div className={style["generos"]}>
    {[
      "Action", "Animation", "Crime", "Comedy", "Drama", "Family",
      "Fantasy", "Horror", "Romance", "Science Fiction", "Thriller"
    ].map((genero) => (
      <label key={genero} className={style["checkbox-item"]}>
        <input
          type="checkbox"
          value={genero}
          checked={generos.includes(genero)}
          onChange={(e) => {
            const value = e.target.value;
            if (e.target.checked) {
              setGeneros([...generos, value]);
            } else {
              setGeneros(generos.filter((g) => g !== value));
            }
          }}
        />
        {genero}
      </label>
    ))}
    <button onClick={buscarGenero}>Buscar Gêneros</button>
</div>
    <div className={style["row"]}>
    <Form placeholder = "Buscar Personagem" busca={personagem} setBusca={setPersonagem} funcao={buscarPersonagem}/>
    <Form placeholder = "Buscar Titulo" busca={titulo} setBusca={setTitulo} funcao={buscarTitulo}/>
    <Form placeholder = "Buscar Diretor" busca={diretor} setBusca={setDiretor} funcao={buscarDiretor}/>
    <Form placeholder = "Buscar Ator" busca={ator} setBusca={setAtor} funcao={buscarAtor}/>
    </div>
    </div>
  );
}

export default Funcionalidades;
