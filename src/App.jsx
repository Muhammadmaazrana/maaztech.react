import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
     
      
     
      <Router>
      <Navbar/>
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
        </Routes>

      </Router>

    


    </div>
  )
}
