import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

import * as actions from '../../store/modules/auth/actions';
import {
  Container,
  Title,
  Form,
  FloatingLabel,
  Label,
  FloatingInput,
  Button,
} from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { CreateAccount } from './styled';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.isLoading);

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
          <FloatingInput
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            autoComplete='email'
            placeholder=''
          />
          <Label htmlFor='email'>E-mail</Label>
        </FloatingLabel>

        <FloatingLabel>
          <FloatingInput
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            autoComplete='current-password'
            placeholder=''
          />
          <Label htmlFor='password'>Senha</Label>
        </FloatingLabel>

        <Button
          disabled={email.length < 4 || password.length < 6}
          type='submit'
        >
          {loading ? <Loading /> : 'Acessar'}
        </Button>

        <CreateAccount>
          Não tem uma conta? <Link to='/register/'>Cadastre-se agora!</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
};

export default Login;
