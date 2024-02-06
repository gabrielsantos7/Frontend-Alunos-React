import React, { useState } from 'react';
import {
  Container,
  Title,
  Button,
  FloatingLabel,
  Input,
  Label,
} from '../../styles/GlobalStyles';
import { Form } from './styled';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <Title>Crie sua conta</Title>
      <Form>
        <FloatingLabel>
          <Input
            type='text'
            id='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <Label htmlFor='username'>Nome completo</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
          />
          <Label htmlFor='email'>E-mail</Label>
        </FloatingLabel>

        <FloatingLabel>
          <Input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <Label htmlFor='password'>Senha</Label>
        </FloatingLabel>
        <Button type='submit'>Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
