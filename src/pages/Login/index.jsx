import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import axios from '../../services/axios';

const Login = () => {
  return (
    <Container>
      <Title color='blue'>Hello World!</Title>
      <Title>Hello World!</Title>
      <button type='button'>Click me</button>
    </Container>
  );
};

export default Login;
