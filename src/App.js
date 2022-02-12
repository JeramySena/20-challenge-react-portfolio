import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      
      <main>
      <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
