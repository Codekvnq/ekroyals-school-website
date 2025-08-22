import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "@fontsource/nunito";        // Defaults to weight 400
import "@fontsource/nunito/700.css"; // For bold
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
