import styled from 'styled-components';

// images
import landingImagefrom from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  position: relative;
  background: url(${landingImagefrom}) no-repeat 80% center;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  main {
    max-width: 350px;
    h1 {
      font-size: 76px;
      font-weight: 800;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  > a {
    width: 80px;
    height: 80px;
    right: 0;
    bottom: 0;
    position: absolute;
    background: #ffd666;
    border-radius: 30px;
    transition: background 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: rgba(0, 0, 0, 0.4);
    }

    &:hover {
      background: #96feff;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  line-height: 34px;
  text-align: right;

  strong {
    font-weight: 800;
  }

  display: flex;
  flex-direction: column;
`;
