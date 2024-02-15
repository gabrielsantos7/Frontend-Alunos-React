import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';

import axios from '../../services/axios';

import Loading from '../../components/Loading';
import { Container, Title, Button, Form, Row } from '../../styles/GlobalStyles';
import { Input } from './styled';

const Aluno = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('O nome deve ter entre 3 e 255 caracteres.');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error('O sobrenome deve ter entre 3 e 255 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('O endereço de e-mail informado é inválido.');
    }

    if (!isInt(idade)) {
      formErrors = true;
      toast.error('A idade deve ser um número inteiro.');
    }

    if (!isFloat(peso)) {
      formErrors = true;
      toast.error('A altura deve ser um número decimal.');
    }

    if (!isFloat(altura)) {
      formErrors = true;
      toast.error('A altura deve ser um número decimal.');
    }

    if (!formErrors) {
      if (loading) return;
      alert('todo ok');
    }
  };

  useEffect(() => {
    if (!id) return;
  }, [id]);

  return (
    <Container>
      <Title>{id ? `Editar aluno ${id}` : 'Criar novo aluno'}</Title>
      <p>Preencha os campos abaixo.</p>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Input
            required
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            required
            type='text'
            placeholder='Sobrenome'
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </Row>

        <Input
          required
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Row>
          <Input
            required
            type='number'
            placeholder='Idade'
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <Input
            required
            type='number'
            placeholder='Peso'
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <Input
            required
            type='number'
            placeholder='Altura'
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </Row>
        <Button type='submit'>Enviar</Button>
      </Form>
    </Container>
  );
};

export default Aluno;
