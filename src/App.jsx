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
     <Testimonials />
    </>
  )
}

export default App
