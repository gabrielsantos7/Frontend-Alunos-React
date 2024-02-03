import { Link } from 'react-router-dom';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to='/'>
            <FaHome size={24} color='#fff' />
          </Link>
        </li>
        <li>
          <Link to='register'>
            <FaUserAlt size={24} color='#fff' />
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <FaSignInAlt size={24} color='#fff' />
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
export default Header;
