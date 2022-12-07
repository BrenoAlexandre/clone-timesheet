import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Sheet from './pages/Sheet';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <main>
      <Sheet />
      {/* //TODO Rotas aqui */}
    </main>
  </React.StrictMode>
);
