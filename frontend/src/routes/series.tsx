import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
//import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import CardContainer from "../components/CardContainer/Cardcontainer.tsx";
import { useState, useEffect } from "react";
function Series(){
    const [series, setSeries] = useState<any[]>([]);
    useEffect(() => {
      async function carregarSeries() {
        try {
          const res = await fetch("http://localhost:3000/series");
          const dados = await res.json();
          setSeries(dados);
        } catch (error) {
          console.error("Erro ao carregar séries:", error);
        }
      }
  
      carregarSeries();
    })    
    return(
        <>
        <Header/>
        <main>

        <CardContainer obras={series} type="series"/>
        </main>
        <Footer/>
        </>
    )
}

export default Series;