import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

const Header = () => {
  const clickedButton = useSelector((state) => state.example.hasClicked);
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
      {clickedButton ? 'Botão clicado' : 'Botão não clicado'}
    </Nav>
  );
};
export default Header;
