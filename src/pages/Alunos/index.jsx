import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunosContainer, IconsContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';
import { useEffect, useState } from 'react';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    axios
      .get('/alunos/')
      .then((response) => setAlunos(response.data))
      .catch(() => {
        toast.error('Erro ao carregar alunos. Por favor, tente novamente.');
      });
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
      <AlunosContainer>
        {alunos.map((aluno, index) => (
          <div key={index}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt='Imagem do Aluno' />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>
              {aluno.nome} {aluno.sobrenome}
            </span>
            <span>{aluno.email}</span>
            <IconsContainer>
              <Link to={`/alunos/${aluno.id}/edit/`}>
                <FaEdit size={16} />
              </Link>
              <Link to={`/alunos/${aluno.id}/delete/`}>
                <FaTrash size={16} />
              </Link>
            </IconsContainer>
          </div>
        ))}
      </AlunosContainer>
    </Container>
  );
};

export default Alunos;
