import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Disciplina from './components/Disciplina'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
          <Nosotros />
          <Disciplina />
          <Galeria />
          <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
