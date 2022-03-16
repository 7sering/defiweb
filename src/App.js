import React from "react";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from './components/navbar/Navbar';
import Signup from "./components/signup/Signup";
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Featured/>
    <Signup/>
    <Footer/>
    </>
  );
}

export default App;
