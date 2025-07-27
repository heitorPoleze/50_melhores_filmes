import Header from "../components/Header/Header.tsx";
import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import Footer from "../components/Footer/Footer.tsx";
import jsonFilmes from "../filmes.json";
import CardContainer from "../components/CardContainer/Cardcontainer.tsx";
function Filmes(){
    return (
        <>
        <Header/>
        <main>
        <Funcionalidades nomePagina="Filmes"/>
        <CardContainer obras={jsonFilmes} type="filmes"/>
        </main>
        <Footer/>
        </>
    )
}

export default Filmes;