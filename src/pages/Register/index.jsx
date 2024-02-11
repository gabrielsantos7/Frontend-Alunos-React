import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import {
  Container,
  Title,
  Button,
  FloatingLabel,
  Input,
  Label,
  Form,
} from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';

const Register = () => {
  const dispatch = useDispatch();
  const { user, isLoading: loading } = useSelector((state) => state.auth);

  const userId = user.id;
  const emailStored = user.email;
  const nameStored = user.nome;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!userId) return;

    setUsername(nameStored);
    setEmail(emailStored);
  }, [userId, nameStored, emailStored]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = false;

    if (username.length < 3 || username.length > 255) {
      formErrors = true;
      toast.error('O nome de usuário deve ter entre 4 e 255 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('O endereço de e-mail informado é inválido.');
    }

    if (!userId && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('A senha deve ter entre 4 e 50 caracteres.');
    }

    if (!formErrors) {
      if (loading) return;

      dispatch(
        actions.registerRequest({
          id: userId,
          nome: username,
          email,
          password,
        }),
      );
    }
  };

  return (
    /*redirectToLogin ?  */
    //   <Navigate to='/login/' />
    // ) : (
    <Container>
      <Title>{userId ? 'Alterar dados da conta' : 'Crie sua conta'}</Title>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel>
          <Input
            type='text'
            id='username'
            autoComplete='name'
            placeholder=''
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor='username'>Nome de usuário</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            type='email'
            id='email'
            autoComplete='email'
            placeholder=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor='email'>E-mail</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            type='password'
            id='password'
            autoComplete='new-password'
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label htmlFor='password'>Senha</Label>
        </FloatingLabel>
        <Button
          disabled={
            username.length < 4 ||
            (!userId && password.length < 6) ||
            !email.includes('@') ||
            !email.includes('.')
          }
          type='submit'
        >
          {loading ? <Loading /> : userId ? 'Salvar alterações' : 'Criar conta'}
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
