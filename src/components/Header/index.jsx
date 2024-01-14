import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';
function Header() {
  return (
    <Nav>
      <FaHome size={24} />
      <FaUserAlt size={24} />
      <FaSignInAlt size={24} />
    </Nav>
  );
}
export default Header;
