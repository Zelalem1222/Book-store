/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css'
import NavBar from './components/Navbar';
import Books from './components/books';
import Catagories from './components/catagories';
import FrontPage from './components/front_page';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<FrontPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
    </div>
  );
}

export default App;
