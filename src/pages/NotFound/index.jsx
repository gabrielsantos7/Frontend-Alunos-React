import React from 'react';

import { Container, Title, Subtitle, Row } from '../../styles/GlobalStyles';
import { Paragraph, HomeLink } from './styled';

const NotFound = () => {
  return (
    <Container>
      <Title $center>Erro 404 - Página não encontrada!</Title>
      <Paragraph>
        Ops, não conseguimos encontrar a página que você estava procurando.
      </Paragraph>
      <Row>
        <HomeLink to='/'>Ir para Página Principal</HomeLink>
      </Row>
    </Container>
  );
};

export default NotFound;
