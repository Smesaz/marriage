import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />  
        <Route path='*' element={<HomePage/>} />  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
