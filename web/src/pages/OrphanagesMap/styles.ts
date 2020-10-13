import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > a {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background: #15c3d6;
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 10;
    transition: background 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #17d6eb;
    }
  }
`;

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    font-size: 20px;
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  line-height: 24px;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
  }
`;

export const Map = styled.div``;
