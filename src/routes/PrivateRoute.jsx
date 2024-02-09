import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import React from 'react';

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);

  return isLogged ? children : <Navigate to={'/login/'} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
