import Header from "../components/Header/Header.tsx";
//import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import Footer from "../components/Footer/Footer.tsx";
import CardContainer from "../components/CardContainer/Cardcontainer.tsx";
import { useState, useEffect } from "react";

function Filmes() {
  const [filmes, setFilmes] = useState<any[]>([]);
  useEffect(() => {
    async function carregarFilmes() {
      try {
        const res = await fetch("http://localhost:3000/filmes");
        const dados = await res.json();
        setFilmes(dados);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }
    carregarFilmes();
  }, []);

  return (
    <>
      <Header />
      <main>
        <CardContainer obras={filmes} type="filmes" />
      </main>
      <Footer />
    </>
  );
}

export default Filmes;
