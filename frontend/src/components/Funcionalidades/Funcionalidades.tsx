import { useState, useEffect } from "react";
import style from "./Funcionalidades.module.css";
function Funcionalidades(props: {
  buscarPorPersonagem: (type: "filmes" | "series", personagem: string) => Promise<any>,
  nomePagina: string,
  setResultados: (resultados: any[]) => void
}) {
  const [valorBusca, setValorBusca] = useState("");
  const tipoObra = props.nomePagina === "Filmes" ? "filmes" : "series";
useEffect(() => { async function buscarPersonagem() {
    const resultados = await props.buscarPorPersonagem(tipoObra, valorBusca );
    props.setResultados(resultados);
    }
    buscarPersonagem();
  }, [valorBusca]);
  return (
    <div className={style["funcionalidades"]}>
    <h1>{props.nomePagina}</h1>
    <div>
      <input
        className={style["input-busca"]}
        type="text"
        placeholder="BUSCAR PERSONAGEM" 
        value={valorBusca}
        onChange={(e) => setValorBusca(e.target.value)}
      />
    </div>
    </div>
  );
}

export default Funcionalidades;
