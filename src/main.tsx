import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/skogai-arcade/colors_and_type.css';
import './styles/skogai-arcade/components.css';
import './styles/app.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
