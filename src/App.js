import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Destinations from './Components/Destinations';
import Search from './Components/Search';
import Select from './Components/Select';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Select/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
