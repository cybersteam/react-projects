import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from "./Components/NavBar"
import RouteLogic from "./Components/Router"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render (
  <React.StrictMode>
    <NavBar />
    <RouteLogic />
  </React.StrictMode>
)

