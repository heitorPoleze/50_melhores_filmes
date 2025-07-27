import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filmes from './routes/filmes.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/filmes" element={<Filmes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
