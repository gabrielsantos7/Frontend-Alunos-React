import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';
function Header() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to='/'>
            <FaHome size={24} color='#fff' />
          </Link>
        </li>
        <li>
          <Link to='login'>
            <FaUserAlt size={24} color='#fff' />
          </Link>
        </li>
        <li>
          <Link to='signout'>
            <FaSignInAlt size={24} color='#fff' />
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
export default Header;
