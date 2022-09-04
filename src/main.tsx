import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from "./Components/NavBar"
import Dataview from "./Components/Dataview"
import Domctrl from "./Components/Domcntrl"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Dataview />
    <Domctrl />
  </React.StrictMode>

)

