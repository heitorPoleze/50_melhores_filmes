import DetalhesObra from "../DetalhesObra/DetalhesObra.tsx";
import style from "./DetalhesSerie.module.css";
import { useParams } from "react-router-dom";
import jsonSeries from "../../series.json";
function DetalhesSerie(){
      const params = useParams();
      const id = Number(params.id);
      const serie = jsonSeries.find(s => s.id === id);
    if(!serie){
        return <div style={{color: "red", padding: "2rem"}}>Série não encontrada</div>;
    }
    return(
        <>
        <DetalhesObra id={serie.id} name={serie.name} overview={serie.overview} imgLink={serie.imgLink} nota={serie.nota} atores={serie.atores} genres={serie.genres} release_date={serie.release_date}/>
        <div className={style["extras"]}>
            <div className={style["number_of_episodes"]}>Número de episódios: {"" +serie.number_of_episodes}</div>
            <div className={style["number_of_seasons"]}>Número de temporadas: {"" +serie.number_of_seasons}</div>
        </div>
        </>
    )
}

export default DetalhesSerie;