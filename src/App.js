import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
          <Route path = "/About" component={About}></Route>
          <Route path = "/Projects" component={Projects}></Route>
          <Route exact path = "/Contact" component={ContactForm}></Route>
          <Route exact path = "/Resume" component={Resume}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
