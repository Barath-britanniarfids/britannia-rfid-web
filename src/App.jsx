import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Verticals from './components/Verticals'
import DigitalThread from './components/DigitalThread'
import BritanniaStory from './components/BritanniaStory'
import Clients from './components/Clients'
import TestimonialCTA from './components/TestimonialCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'

function LandingPage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.state?.scrollTo
    if (!id) return
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => clearTimeout(timer)
  }, [location.state])

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Verticals />
      <DigitalThread />
      <BritanniaStory />
      <Clients />
      <TestimonialCTA />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
