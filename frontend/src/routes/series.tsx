import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import jsonSeries from "../series.json"
import CardContainer from "../components/CardContainer/Cardcontainer.tsx";
function Series(){
    return(
        <>
        <Header/>
        <main>
        <Funcionalidades nomePagina="Séries"/>
        <CardContainer obras={jsonSeries} type="series"/>
        </main>
        <Footer/>
        </>
    )
}

export default Series;