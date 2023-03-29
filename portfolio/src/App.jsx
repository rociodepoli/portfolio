import Navbar from './Components/Navbar/navbar';
import React from 'react';
 import './App.css';
import { Route, Routes } from 'react-router-dom';

import PortfolioPage from './Components/PortfolioPage/porfolio';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <PortfolioPage/>
      {/* <Routes>
        <Route path='/' element={<PortfolioPage/>}>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
