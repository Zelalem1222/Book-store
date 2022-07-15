import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Books from './components/books';
import Catagories from './components/Catagories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
    </div>
  );
}

export default App;
