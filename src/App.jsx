import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AddDoctor from './components/addDoctor/AddDoctor'
import WhyUs from './components/whyUs/WhyUs'
import Services from './components/services/Services'
import About from './components/about/About'
import Features from './components/features/Features'
import Testimonials from './components/Testimonials/Testimonials'
import Works from './components/works/Works'
import Blog from './components/Blog/Blog'
import FAQ from './components/FAQ/FAQ'

function App() {

  return (
    <>
     {/* <Routes>
      <Route path='' element={<About />} />
     </Routes> */}

     <Header />
     <Hero />
     <AddDoctor />
     <WhyUs />
     <Services />
     <About />
     <Features />
     <Works />
     <Testimonials />
     <Blog />
     <FAQ />
    </>
  )
}

export default App
