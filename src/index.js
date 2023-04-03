import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from "@mui/material"
import ErrorBoundary from "./ErrorBoundry";
import App from './App';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <CssBaseline />
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);
