import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';

// Inicializar tema antes de renderizar la App
const _storedTheme = localStorage.getItem('theme');
if (_storedTheme === 'dark' || (!_storedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
