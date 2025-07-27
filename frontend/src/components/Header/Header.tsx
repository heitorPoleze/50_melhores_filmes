import Botao from "../Botao/Botao.tsx";
import style from "./Header.module.css";

function Header(){
    return (
        <header className={style["header"]}>
            <div className={style["links"]}>
                <Botao goto="/filmes" descricao="Filmes"/>
                <Botao goto="/series" descricao="Séries"/>
            </div>
        </header>
    )
}

export default Header;