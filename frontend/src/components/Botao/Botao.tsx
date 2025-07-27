import { Link } from "react-router-dom";
import style from "./Botao.module.css";

function Botao(props:any){
    return(
        <Link className={style["botao"]} to={props.goto}>{props.descricao}</Link>
    )
}

export default Botao;