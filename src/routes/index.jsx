import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';

import App from '../App';

import PrivateRoute from './PrivateRoute';

import Header from '../components/Header';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Alunos from '../pages/Alunos';

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <App />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/alunos'
              element={
                <PrivateRoute>
                  <Alunos />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppRoutes;
