import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaUserAlt, FaUserCog } from 'react-icons/fa';

import { Nav } from './styled';

const Header = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Nav>
      <ul>
        <li>
          <Link to='/'>
            <FaHome size={24} color='#fff' />
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to='/register/'>
              <FaUserCog size={24} color='#fff' />
            </Link>
          ) : (
            <Link to='/login/'>
              <FaUserAlt size={24} color='#fff' />
            </Link>
          )}
        </li>
        <span>{isLoggedIn ? user.nome : 'Anônimo'}</span>
      </ul>
    </Nav>
  );
};
export default Header;
