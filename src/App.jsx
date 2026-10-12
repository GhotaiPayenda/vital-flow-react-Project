import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='' element={<About />} />
     </Routes>

     <Header />
    </>
  )
}

export default App
