import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About'
import Reglamento from './pages/Home/reglamento'
import './App.css'
import './pages/Home/Home.css'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reglamento" element={<Reglamento />} />
      </Routes>
    </div>
  )
}

export default App
