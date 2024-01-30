import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import React from 'react';

const PrivateRoute = ({ children }) => {
  const isLogged = false;

  return isLogged ? children : <Navigate to={'/login'} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
