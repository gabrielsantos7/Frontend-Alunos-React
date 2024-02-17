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
import Register from '../pages/Register';
import Aluno from '../pages/Aluno';
import Fotos from '../pages/Fotos';
import Alunos from '../pages/Alunos';

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <App />
          <Routes>
            <Route path='/' element={<Alunos />} />
            <Route path='/register/' element={<Register />} />
            <Route path='/login/' element={<Login />} />
            <Route
              path='/alunos/:id/edit'
              element={
                <PrivateRoute>
                  <Aluno />
                </PrivateRoute>
              }
            />
            <Route
              path='/alunos/novo/'
              element={
                <PrivateRoute>
                  <Aluno />
                </PrivateRoute>
              }
            />
            <Route
              path='/alunos/:id/fotos/'
              element={
                <PrivateRoute>
                  <Fotos />
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
