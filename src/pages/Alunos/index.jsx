import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

import {
  Container,
  Row,
  Title,
  Subtitle,
  Input,
} from '../../styles/GlobalStyles';
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
  const [filteredAlunos, setFilteredAlunos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState({
    id: null,
    nome: '',
  });

  const skeletonCards = Array.from({ length: 4 }, (_, index) => (
    <SkeletonCard key={index} />
  ));

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    setFilteredAlunos(
      alunos.filter((aluno) => {
        const fullName = `${aluno.nome.toLowerCase()} ${aluno.sobrenome.toLowerCase()}`;
        return fullName.includes(searchText.toLowerCase());
      }),
    );
  };

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
      .then((response) => {
        setAlunos(response.data);
        setFilteredAlunos(response.data);
      })
      .catch(() => {
        toast.error('Erro ao carregar alunos. Por favor, tente novamente.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <Row $justify='space-between'>
        <Title>Alunos</Title>
        <CreateLink to='/alunos/novo'>
          <FaPlus />
          Cadastrar novo aluno
        </CreateLink>
      </Row>
      <Row spacing={2}>
        <Input
          type='search'
          name='search'
          id='search'
          placeholder='Pesquisar aluno pelo nome....'
          value={search}
          onChange={handleSearch}
        />
      </Row>
      <AlunosContainer>
        {loading ? (
          skeletonCards
        ) : alunos.length === 0 ? (
          <Subtitle>Nenhum aluno foi cadastrado ainda!</Subtitle>
        ) : (
          filteredAlunos.map((aluno, index) => (
            <div key={index}>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt='Imagem do Aluno' />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <span>{`${aluno.nome} ${aluno.sobrenome.split(' ')[0]}`}</span>
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
          itemToDelete={studentToDelete}
          handleConfirmDelete={handleConfirmDelete}
          message={`Deseja excluir o(a) aluno(a) ${studentToDelete.nome}?`}
          confirmText='Esta ação é irreversível e removerá o aluno do sistema.'
        />
      </AlunosContainer>
    </Container>
  );
};

export default Alunos;
