import Header from "../components/Header/Header.tsx";
import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import Footer from "../components/Footer/Footer.tsx";
import CardContainer from "../components/CardContainer/Cardcontainer.tsx";
import { useState, useEffect } from "react";
import {buscarPorPersonagem, getObras } from "../services.tsx";
function Filmes() {
  const [filmes, setFilmes] = useState<any[]>([]);
  useEffect(() => {
    async function carregarFilmes() {
      try {
        const dados = await getObras("filmes"); 
        setFilmes(dados);
      } catch (error) {
        console.log(error);
      }
    }
    carregarFilmes();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Funcionalidades 
        buscarPorPersonagem={buscarPorPersonagem}
        setResultados={setFilmes}
        nomePagina="Filmes"  />
        <CardContainer obras={filmes} type="filmes" />
      </main>
      <Footer />
    </>
  );
}

export default Filmes;
