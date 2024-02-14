import React from 'react';
import Home from './App/features/Pages/Home/Home';
import About from './App/features/Pages/About/About';
import Header from './App/features/Components/Hero Section/Header/Header';
import Models from './App/features/Pages/VeichleModels/Models';
import Testimonials from './App/features/Pages/Testimonials/Testimonials';
import Team from './App/features/Pages/Team/Team';
import Contact from './App/features/Pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Models' element={<Models />}></Route>
      <Route path='/Testimonials' element={<Testimonials />}></Route>
      <Route path='/Team' element={<Team />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
    </Routes>
    </div>
  )  
};

export default App;