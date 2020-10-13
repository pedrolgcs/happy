import React from 'react';

// styles
import GlobalStyle from './styles/GlobalStyle';

// routes
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
