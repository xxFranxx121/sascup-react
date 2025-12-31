import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About'
import Reglamento from './pages/Home/reglamento'
import Sponsors from './pages/Home/sponsors'
import Estadisticas from './pages/Home/estadisticas'
import Equipos from './pages/Home/equipos'
import './App.css'
import './pages/Home/Home.css'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/equipos" element={<Equipos />} />
      </Routes>
    </div>
  )
}

export default App
