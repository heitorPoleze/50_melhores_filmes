import Header from "../components/Header/Header.tsx";
import Funcionalidades from "../components/Funcionalidades/Funcionalidades.tsx";
import Footer from "../components/Footer/Footer.tsx";

function Filmes(){
    return (
        <>
        <Header/>
        <main>
        <Funcionalidades nomePagina="Filmes"/>
        </main>
        <Footer/>
        </>
    )
}

export default Filmes;