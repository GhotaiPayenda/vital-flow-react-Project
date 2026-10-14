import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
     {/* <Routes>
      <Route path='' element={<About />} />
     </Routes> */}

     <Header />
     <Hero />
    </>
  )
}

export default App
