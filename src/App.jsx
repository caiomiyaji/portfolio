import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'

//css
import './App.css'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App
