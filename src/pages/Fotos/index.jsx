import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

import { Container, Title, Button } from '../../styles/GlobalStyles';
import { ButtonLink, Buttons, Form, GalleryContainer } from './styled';
import Loading from '../../components/Loading';

const Photos = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [aluno, setAluno] = useState({});
  const [photo, setPhoto] = useState('');
  const [gallery, setGallery] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    const sentPhoto = event.target.files[0];
    const photoURL = URL.createObjectURL(sentPhoto);
    setPhoto(photoURL);
    setSelectedFile(sentPhoto);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      toast.error('Por favor, selecione uma foto antes de enviar.');
      return;
    }

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('photo', selectedFile);

    try {
      setLoadingForm(true);
      const response = await axios.post('/photos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const newPhoto = response.data;
      setGallery([newPhoto, ...gallery]);
      setSelectedFile(null);
      toast.success('Foto enviada com sucesso!');
    } catch (error) {
      const status = get(error, 'response.status', 0);
      const data = get(error, 'response.data', {});
      const errors = get(data, 'errors', []);
      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Ocorreu um erro desconhecido ao enviar a foto.');
      }

      if (status === 401) {
        toast.error('Sessão expirada. Faça login novamente para continuar.');
        dispatch(actions.loginFailure());
        // TODO: Redirect to login
      }
    } finally {
      setLoadingForm(false);
    }
  };

  useEffect(() => {
    setLoadingPage(true);
    axios
      .get(`/alunos/${id}`)
      .then((response) => {
        const alunoResponse = response.data;
        const studentPhoto = get(aluno, 'Fotos[0].url', '');
        setAluno(alunoResponse);
        setPhoto(studentPhoto);
        setGallery(alunoResponse.Fotos);
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
  }, [id, aluno]);

  return (
    <Container>
      <Title>Fotos de {`${aluno.nome} ${aluno.sobrenome}`}</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor='foto'>
          {photo ? <img src={photo} alt='Foto' /> : 'Selecionar'}
          <input type='file' onChange={handleChange} id='foto' name='foto' />
        </label>
        {selectedFile ? (
          <Buttons>
            <ButtonLink to={`/alunos/${id}/edit`}>Cancelar</ButtonLink>
            <Button type='submit'>
              {loadingForm ? <Loading /> : 'Salvar Foto'}
            </Button>
          </Buttons>
        ) : (
          'Clique na imagem acima para fazer upload de outra foto.'
        )}
      </Form>

      <div>
        <h3>Galeria</h3>

        <GalleryContainer>
          {gallery.map((photo, index) => (
            <img key={index} src={photo.url} alt='Imagem do Aluno' />
          ))}
        </GalleryContainer>
      </div>
    </Container>
  );
};

export default Photos;
