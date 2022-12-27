import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import Socials from './components/Socials'
import { BrowserRouter } from 'react-router-dom'

//css
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Socials />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
