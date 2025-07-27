import DetalhesObra from "../DetalhesObra/DetalhesObra.tsx";
import style from "./DetalhesSerie.module.css";
function DetalhesSerie(){
    return(
        <>
        <DetalhesObra/>
        <div className={style["number_of_episodes"]}>NUMERO DE EPISODIOS AQUI</div>
        <div className={style["number_of_seasons"]}>NUMERO DE TEMPORADAS AQUI</div>
        </>
    )
}

export default DetalhesSerie;