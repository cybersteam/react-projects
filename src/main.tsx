import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from "./Components/NavBar"
import Dataview from "./Components/Dataview"
import Domctrl from "./Components/Domcntrl"
import Alertbutton from "./Sandbox/Alertbutton"
import Wrapped from "./Sandbox/Wrapped"
//import Closure from "./Sandbox/Closure"
import ClosuresInReact from './Sandbox/closureReact'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Dataview />
    <Domctrl />
    <Alertbutton  />
    <Wrapped />
   
    <ClosuresInReact />
  </React.StrictMode>
)

