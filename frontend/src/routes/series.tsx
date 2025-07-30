import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
//import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import CardContainer from "../components/CardContainer/Cardcontainer.tsx";
import { useState, useEffect } from "react";
import { getObras } from "../services.tsx";
import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
function Series(){
    const [series, setSeries] = useState<any[]>([]);
    useEffect(() => {
      async function carregarSeries() {
        try {
          const dados = await getObras("series");
          setSeries(dados);
        } catch (error) {
          console.error("Erro ao carregar séries:", error);
        }
      }  
      carregarSeries();
    }, []);    
    return(
        <>
        <Header/>
        <main>
        <Funcionalidades
        setResultados={setSeries}
        nomePagina="Séries"
        />
        <CardContainer obras={series} type="series"/>
        </main>
        <Footer/>
        </>
    )
}

export default Series;