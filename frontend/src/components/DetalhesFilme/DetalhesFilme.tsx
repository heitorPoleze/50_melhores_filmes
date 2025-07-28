import { useParams } from "react-router-dom";
import jsonFilmes from "../../filmes.json";
import DetalhesObra from "../DetalhesObra/DetalhesObra.tsx";
import style from "./DetalhesFilme.module.css";

function DetalhesFilme() {
  const params = useParams();
  const id = Number(params.id);
  const filme = jsonFilmes.find(f => f.id === id);

  if (!filme) {
    return <div style={{ color: "red", padding: "2rem" }}>Filme não encontrado</div>;
  }

  return (
    <>
      <DetalhesObra
        id={filme.id}
        name={filme.name}
        overview={filme.overview}
        imgLink={filme.imgLink}
        nota={filme.nota}
        atores={filme.atores}
        genres={filme.genres}
        release_date={filme.release_date}
      />
      <div className={style["diretor"]}>
        Diretor: 
        {" " + filme.diretor }
      </div>
    </>
  );
}

export default DetalhesFilme;
