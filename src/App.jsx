import { useState } from 'react'
import './App.css'
import Menu from './components/menu'
import Inicio from './components/inicio'

function App() {

  const [ seccionActual, setSeccionActual ] = useState('inicio')

  return (
    <>
      <Menu />

      {seccionActual === 'inicio' && ( <Inicio /> )}
    </>
  )
}

export default App
