import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Plan from "./pages/Plan";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Plan" element={<Plan/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/**" element={<Error/>} />
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
