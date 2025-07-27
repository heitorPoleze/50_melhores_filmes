import style from "./DetalhesObra.module.css";
//import { useParams } from "react-router-dom";
function DetalhesObra() {
    return (
        <div className={style["container"]}>
            <div className={style["detalhes"]}>
                <div className={style["name"]}>TITULO AQUI</div>
                <div className={style["release_date"]}>ANO LANCAMENTO AQUI</div>
                <div className={style["img"]}>POSTER AQUI </div>
                <div className={style["overview"]}>SINOPSE AQUI</div>
                <div className={style["genres"]}>GENEROS AQUI</div>
                <div className={style["nota"]}>NOTA AQUI</div>
                <div className={style["atores"]}>ATORES AQUI</div>
            </div>
        </div>
        )
}

export default DetalhesObra;