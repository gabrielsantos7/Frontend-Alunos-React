import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import axios from '../../services/axios';
import {
  Container,
  Title,
  Button,
  FloatingLabel,
  Input,
  Label,
  Loader,
} from '../../styles/GlobalStyles';
import { Form } from './styled';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

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

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('A senha deve ter entre 4 e 50 caracteres.');
    }

    if (!formErrors) {
      if (loading) return;
      setLoading(true);
      axios
        .post('/users/', {
          nome: username,
          password,
          email,
        })
        .then(() => {
          toast.success('Conta criada com sucesso!');
          setTimeout(() => {
            setRedirectToLogin(true);
          }, 500);
        })
        .catch((error) => {
          const errors = get(error, 'response.data.errors', []);
          errors.map((error) => toast.error(error));
        })
        .finally(() => {
          setUsername('');
          setEmail('');
          setPassword('');
          setLoading(false);
        });
    }
  };

  return redirectToLogin ? (
    <Navigate to='/login/' />
  ) : (
    <Container>
      <Title>Crie sua conta</Title>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel>
          <Input
            type='text'
            id='username'
            autoComplete='name'
            placeholder=''
            value={username}
            onChange={handleUsernameChange}
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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
          />
          <Label htmlFor='password'>Senha</Label>
        </FloatingLabel>
        <Button
          disabled={
            username.length < 4 ||
            password.length < 6 ||
            !email.includes('@') ||
            !email.includes('.')
          }
          type='submit'
        >
          {loading ? <Loader /> : 'Criar conta'}
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
