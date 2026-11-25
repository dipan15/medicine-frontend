import { useState } from 'react'
import './MainContent.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import MedicineList from './MedicineList.jsx';
import About from './About.jsx';
import Add from './Add.jsx';
import Edit from './Edit.jsx';
import NotFound from './NotFound.jsx';

function Main() {

  return (
    <>
      <div className="main-content">
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicine-list" element={<MedicineList />} />
          <Route path="/about" element={<About />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:medId' element={<Edit />} />
          {/* Catch-all route for invalid URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default Main
