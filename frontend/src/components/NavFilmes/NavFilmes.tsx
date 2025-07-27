import Botao from "../Botao/Botao.tsx";
import Funcionalidades from "../Funcionalidades/Funcionalidades.tsx";
import style from "./NavFilmes.module.css";

function NavFilmes(){
    return(
        <>
        <Funcionalidades/>
        <Botao descricao = "Diretor"></Botao>
        <input type="text" placeholder="Buscar" className={style["input"]}></input>
        </>
    )
}

export default NavFilmes;