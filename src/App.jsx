import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Sec2 from './components/sec2/Sec2'

function App() {

  return (
    <>
     {/* <Routes>
      <Route path='' element={<About />} />
     </Routes> */}

     <Header />
     <Hero />
     <Sec2 />
    </>
  )
}

export default App
