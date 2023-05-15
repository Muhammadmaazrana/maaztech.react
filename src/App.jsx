import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
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
