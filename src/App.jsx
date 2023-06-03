import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Index from './pages/home/Index'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
