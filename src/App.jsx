import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/organisms/Navbar'
import HomeView from '@/pages/home/Index'
import BlogView from '@/pages/blog/Index'
import Footer from '@/components/organisms/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/blog" element={<BlogView />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
