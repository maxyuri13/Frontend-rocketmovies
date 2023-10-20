import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
// import { Routes } from './routes';
import { Preview } from './pages/Preview'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Routes /> */}
      <Preview />
    </ThemeProvider>
  </React.StrictMode>,
)