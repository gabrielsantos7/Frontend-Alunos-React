import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

import * as actions from '../../store/modules/auth/actions';
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
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('O endereço de e-mail informado é inválido!');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida!');
    }

    if (!formErrors) {
      if (loading) return;
      setLoading(true);
      dispatch(
        actions.loginRequest({
          email,
          password,
        }),
      );
    }
  };

  return (
    <Container>
      <Title>Login</Title>

      <Form onSubmit={handleSubmit}>
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

        <Button type='submit'>{loading ? <Loader /> : 'Acessar'}</Button>
      </Form>
    </Container>
  );
};

export default Login;
