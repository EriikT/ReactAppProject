import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<Login />} />
              <Route path='Login' element={<Login />} />
              <Route path='Home' element={<Home />} />
              <Route path='Profile' element={<Profile />} />
              <Route path='CreateAccount' element={<CreateAccount />} />
              <Route path='Signup' element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;