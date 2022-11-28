import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/Header';
import './index.scss';
import Sheet from './pages/Sheet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <main>
      <Sheet />
      {/* //TODO Rotas aqui */}
    </main>
  </React.StrictMode>
);
