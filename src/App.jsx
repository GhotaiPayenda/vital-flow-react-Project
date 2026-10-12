import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='' element={<About />} />
     </Routes>
    </>
  )
}

export default App
