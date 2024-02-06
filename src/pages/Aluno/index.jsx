import { useParams } from 'react-router-dom';
import { Container, Title } from '../../styles/GlobalStyles';

const Aluno = () => {
  const { id } = useParams();
  return (
    <Container>
      <Title>Aluno {id}</Title>
    </Container>
  );
};

export default Aluno;
