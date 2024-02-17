import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { get } from 'lodash';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';
import { Container, Title, Button, Form, Row } from '../../styles/GlobalStyles';
import { Input } from './styled';
import SkeletonForm from '../../components/SkeletonForm';

const Aluno = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = async (e) => {
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

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('A idade deve ser um número inteiro.');
    }

    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error('A altura deve ser um número decimal.');
    }

    if (!isFloat(String(altura)) || isInt(String(altura))) {
      formErrors = true;
      toast.error('A altura deve ser um número decimal.');
    }

    if (!formErrors && !loadingForm) {
      setLoadingForm(true);
      try {
        if (id) {
          await axios.put(`/alunos/${id}`, {
            nome,
            sobrenome,
            email,
            idade,
            peso,
            altura,
          });
          toast.success('Dados atualizados com sucesso!');
        } else {
          await axios.post('/alunos/', {
            nome,
            sobrenome,
            email,
            idade,
            peso,
            altura,
          });
          toast.success('Aluno(a) criado(a) com sucesso!');
        }
        // TODO: Redirect to home
      } catch (error) {
        const status = get(error, 'response.status', 0);
        const data = get(error, 'response.data', {});
        const errors = get(data, 'errors', []);
        if (errors.length > 0) {
          errors.map((error) => toast.error(error));
        } else {
          toast.error(
            'Ocorreu um erro desconhecido. Tente novamente mais tarde.',
          );
        }

        if (status === 401) {
          toast.error('Sessão expirada. Faça login novamente para continuar.');
          dispatch(actions.loginFailure());
          // TODO: Redirect to login
        }
      } finally {
        setLoadingForm(false);
      }
    }
  };

  useEffect(() => {
    if (!id) return;
    setLoadingPage(true);
    axios
      .get(`/alunos/${id}`)
      .then((response) => {
        const aluno = response.data;
        const foto = get(aluno, 'Fotos[0].url', '');
        setNome(aluno.nome);
        setSobrenome(aluno.sobrenome);
        setEmail(aluno.email);
        setIdade(aluno.idade);
        setAltura(aluno.altura);
        setPeso(aluno.peso);
      })
      .catch((error) => {
        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);
        if (status === 400) {
          // TODO: Redirect to home
          toast.error(`O aluno com ID ${id} não foi encontrado.`);
        } else {
          errors.map((e) => toast.error(e));
        }
      })
      .finally(() => setLoadingPage(false));
  }, [id]);

  return (
    <Container>
      <Title>{id && nome ? `Editar aluno #${id}` : 'Criar novo aluno'}</Title>

      {loadingPage ? (
        <SkeletonForm />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <div>
              <label htmlFor='nome'>Nome:</label>
              <Input
                required
                type='text'
                placeholder='Nome'
                id='nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='sobrenome'>Sobrenome:</label>
              <Input
                required
                type='text'
                placeholder='Sobrenome'
                id='sobrenome'
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </div>
          </Row>

          <div style={{ width: '100%' }}>
            <label htmlFor='email'>Email:</label>
            <Input
              required
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Row>
            <div>
              <label htmlFor='idade'>Idade:</label>
              <Input
                required
                type='number'
                placeholder='Idade'
                id='idade'
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='peso'>Peso:</label>
              <Input
                required
                type='number'
                placeholder='Peso'
                id='peso'
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='altura'>Altura:</label>
              <Input
                required
                type='number'
                placeholder='Altura'
                id='altura'
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
          </Row>
          <Button type='submit'>{loadingForm ? <Loading /> : 'Enviar'}</Button>
        </Form>
      )}
    </Container>
  );
};

export default Aluno;
