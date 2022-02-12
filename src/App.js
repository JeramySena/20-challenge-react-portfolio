import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div className="content">
      <Router>
        <Header></Header> 
     
        <About></About>
      <Routes>
          <Route path = "/About" element={About}></Route>
          <Route path = "/Projects" element={Projects}></Route>
          <Route exact path = "/Contact" element={ContactForm}></Route>
          <Route exact path = "/Resume" element={Resume}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
