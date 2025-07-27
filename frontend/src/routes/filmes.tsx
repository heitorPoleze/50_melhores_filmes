import Header from "../components/Header/Header.tsx";
import NavFilmes from "../components/NavFilmes/NavFilmes.tsx";
import Footer from "../components/Footer/Footer.tsx";

function Filmes(){
    return (
        <>
        <Header/>
        <main>
        <NavFilmes/>
        </main>
        <Footer/>
        </>
    )
}

export default Filmes;