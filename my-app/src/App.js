import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<Login />} />
              <Route path='Login' element={<Login />} />
              <Route path='Home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;