import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

export default function App() {

  return (
    <>
      <Header />

      <div className="container">
        <Home />
      </div>    

      <Footer />
    </>
  )
}