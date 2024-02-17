import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

import { Container, Title } from '../../styles/GlobalStyles';
import {
  AlunosContainer,
  CreateLink,
  IconsContainer,
  ProfilePicture,
} from './styled';
import axios from '../../services/axios';
import SkeletonCard from '../../components/SkeletonCard';
import Modal from '../../components/Modal';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState({
    id: null,
    nome: '',
  });

  const skeletonCards = Array.from({ length: 4 }, (_, index) => (
    <SkeletonCard key={index} />
  ));

  const handleDeleteStudent = (id, nome) => {
    setStudentToDelete({ id, nome });
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setLoading(true);
    axios
      .delete(`/alunos/${studentToDelete.id}`)
      .then(() => {
        toast.success('Aluno(a) excluído(a) com sucesso!');
        setShowModal(false);
        setAlunos(alunos.filter((aluno) => aluno.id !== studentToDelete.id));
      })
      .catch((error) => {
        const status = get(error, 'response.status', 0);
        toast.error(
          status === 401
            ? 'Você precisa fazer login para acessar esta funcionalidade.'
            : 'Ocorreu um erro desconhecido.',
        );
      })
      .finally(setLoading(false));
  };

  useEffect(() => {
    axios
      .get('/alunos/')
      .then((response) => setAlunos(response.data))
      .catch(() => {
        toast.error('Erro ao carregar alunos. Por favor, tente novamente.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <Title>Alunos</Title>
      <CreateLink to='/alunos/novo'>
        <FaPlus />
        Cadastrar novo aluno
      </CreateLink>
      <AlunosContainer>
        {loading ? (
          skeletonCards
        ) : alunos.length === 0 ? (
          <h3>Nenhum aluno foi cadastrado ainda!</h3>
        ) : (
          alunos.map((aluno, index) => (
            <div key={index}>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt='Imagem do Aluno' />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <span>{`${aluno.nome} ${aluno.sobrenome}`}</span>
              <span>{aluno.email}</span>
              <IconsContainer>
                <Link to={`/alunos/${aluno.id}/edit/`}>
                  <FaEdit size={16} />
                </Link>

                <FaTrash
                  size={16}
                  cursor='pointer'
                  onClick={() =>
                    handleDeleteStudent(
                      aluno.id,
                      `${aluno.nome} ${aluno.sobrenome}`,
                    )
                  }
                />
              </IconsContainer>
            </div>
          ))
        )}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          studentToDelete={studentToDelete}
          handleConfirmDelete={handleConfirmDelete}
        />
      </AlunosContainer>
    </Container>
  );
};

export default Alunos;
