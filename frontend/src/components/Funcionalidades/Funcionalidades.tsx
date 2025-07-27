import Botao from "../Botao/Botao.tsx";
import style from "./Funcionalidades.module.css";

function Funcionalidades(props: any) {
  return (
    <div className={style["funcionalidades"]}>
        <h1>{props.nomePagina}</h1>
      <div className={style["linha-input"]}>
        <input
          type="text"
          placeholder="Buscar"
          className={style["input-busca"]}
        />
      </div>

      <div className={style["filtros"]}>
        <Botao descricao="Titulo" />
        <Botao descricao="Ator" />
        <Botao descricao="Personagem" />
        <Botao descricao="Diretor" />
      </div>
    </div>
  );
}

export default Funcionalidades;
