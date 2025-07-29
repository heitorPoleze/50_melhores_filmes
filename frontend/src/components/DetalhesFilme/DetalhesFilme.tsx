import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetalhesObra from "../DetalhesObra/DetalhesObra.tsx";
import style from "./DetalhesFilme.module.css";
import { getDetalhesObra } from "../../services.tsx";

function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState<any>();

useEffect(() => {
  async function buscaFilme() {
    try {
      const dado = await getDetalhesObra("filmes", Number(id));
      setFilme(dado);
    } catch (error: any) {
      console.log("Erro ao buscar filme:", error);
    }
  }
  if (id) buscaFilme();
}, [id]);

if (!filme) {
  return <div style={{ padding: "2rem" }}>Carregando...</div>;
};


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
        Diretor: {filme.diretor ?? "não disponível"}
      </div>
    </>
  );
}

export default DetalhesFilme;
