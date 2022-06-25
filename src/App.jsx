import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Qualification from './components/qualification/Qualification'
import Abilities from './components/abilities/Abilities'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'  
import Testimononials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Qualification/>
      <Abilities/>
      <Services/>
      <Portfolio/>
      <Testimononials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;