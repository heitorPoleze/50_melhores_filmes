import DetalhesObra from "../DetalhesObra/DetalhesObra.tsx";
import style from "./DetalhesFilme.module.css";

function DetalhesFilme(){
    return(
        <>
        <DetalhesObra/>
        <div className={style["diretor"]}>DIRETOR AQUI</div>
        </>
    )
}

export default DetalhesFilme;