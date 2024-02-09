import { useState } from 'react';
import {
  Container,
  Title,
  Form,
  FloatingLabel,
  Label,
  Input,
  Loader,
  Button,
} from '../../styles/GlobalStyles';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Title>Login</Title>

      <Form>
        <FloatingLabel>
          <Input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            autoComplete='email'
            placeholder=''
          />
          <Label htmlFor='email'>E-mail</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            autoComplete='current-password'
            placeholder=''
          />
          <Label htmlFor='password'>Senha</Label>
        </FloatingLabel>

        <Button type='submit'>{loading ? <Loader /> : 'Fazer Login'}</Button>
      </Form>
    </Container>
  );
};

export default Login;
