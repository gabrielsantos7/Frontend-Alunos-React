import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';

import * as actions from '../../store/modules/auth/actions';
import { Nav } from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(actions.loginFailure());
  };
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
          {isLoggedIn ? (
            <FaPowerOff
              onClick={handleLogout}
              size={24}
              color='#fff'
              cursor='pointer'
            />
          ) : (
            <Link to='/login'>
              <FaSignInAlt size={24} color='#fff' />
            </Link>
          )}
        </li>
        <span>{isLoggedIn ? user.nome : 'Sem usuário'}</span>
      </ul>
    </Nav>
  );
};
export default Header;
