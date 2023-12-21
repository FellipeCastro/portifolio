import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'

import './App.css'
import Projects from './components/Project'

export default function App() {

  return (
    <>
      <Header />

      <div className="container">
        <Home />
        <About />
        <Projects />
      </div>    

      <Footer />
    </>
  )
}