import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filmes from './routes/filmes.tsx';
import Series from './routes/series.tsx';
function App() {

  return (
    <div className="main-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
