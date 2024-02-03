import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(exampleActions.clickedButtonRequest());
  };

  return (
    <Container>
      <Title color='blue'>Hello World!</Title>
      <Title>Hello World!</Title>
      <button type='button' onClick={handleClick}>
        Click me
      </button>
    </Container>
  );
};

export default Login;
