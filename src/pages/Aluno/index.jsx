import { useParams } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

const Aluno = () => {
  const { id } = useParams();
  return (
    <Container>
      <Title>Aluno {id}</Title>
    </Container>
  );
};

export default Aluno;
