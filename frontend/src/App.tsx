import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filmes from './routes/filmes.tsx';
import Series from './routes/series.tsx';
import DetalhesFilme from './components/DetalhesFilme/DetalhesFilme.tsx';
import DetalhesSerie from './components/DetalhesSerie/DetalhesSerie.tsx';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
function App() {

  return (
    <div className="main-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
        <Route path="/filmes/:id" element={
        <>
          <Header/>
          <main> 
          <DetalhesFilme />
          </main>
          <Footer/></>
        } />
        <Route path="/series/:id" element={
          <>
          <Header/>
          <main>
          <DetalhesSerie />
          </main>
          <Footer/>
          </>
          } />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
