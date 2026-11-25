import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <BrowserRouter>
          {/* Navigation Links */}
          <Header />
          {/* Route Definitions */}
          <MainContent />
          {/* Navigation Links */}
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

/* Notes */
/* PUT/DELETE localhost:8090/medicineapi/medicines/1 */
/* npm install react-router */
/* npm install react-router-dom */
/* npm install bootstrap */
/* import 'bootstrap/dist/css/bootstrap.min.css'; in main.jsx*/
/* npm install -g json-server */
/* json-server --watch db.json --port 3030 (in another terminal) */
/* npm install axios */
