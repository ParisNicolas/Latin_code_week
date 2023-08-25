import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Home from './Home';
import Juego from './Juego';
import Info from './info/Info';
import Bman from './B-Man';
import Bpreg from './B-Preg';
import Btec from './B-Tec';
import Bven from './B-Ven';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calcualdora from './Calculadora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="ven" index element={<Bven/>} />
          <Route path="man" index element={<Bman />} />
          <Route path="tec" index element={<Btec />} />
          <Route path="preg" index element={<Bpreg />} />
          <Route path="juego" element={<Juego />} />
          <Route path="info" element={<Info />} />
          <Route path="calculadora" element={<Calcualdora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
