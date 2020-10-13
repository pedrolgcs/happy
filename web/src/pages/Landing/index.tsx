import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// styles
import { Container, ContentWrapper, Location } from './styles';

// images
import logoImg from '../../assets/images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <Location>
          <strong>Acari</strong>
          <span>Rio Grande do Norte</span>
        </Location>

        <Link to="/app">
          <FiArrowRight size={26} />
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
