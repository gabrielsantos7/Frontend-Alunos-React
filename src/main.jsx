import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Login from './pages/Login/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <App />
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  </BrowserRouter>,
);
