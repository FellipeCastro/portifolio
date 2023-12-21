import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'

import './App.css'

export default function App() {

  return (
    <>
      <Header />

      <div className="container">
        <Home />

        <About />
      </div>    

      <Footer />
    </>
  )
}