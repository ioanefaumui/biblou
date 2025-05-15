import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RootPage } from './pages/root.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootPage />
  </StrictMode>
);
