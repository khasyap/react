import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Service from './Service'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ProductProvide>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/app" element={<Navbar/>}>
      <Route path="home" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="gallery" element={<Gallery/>}></Route>
      <Route path="service" element={<Service/>}></Route>
      </Route>
    </Routes>
    </ProductProvide>
    </BrowserRouter>
      
    </>
  )
}

export default App
