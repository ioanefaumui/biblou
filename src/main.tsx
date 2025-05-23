import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/style/index.css';
import { Router } from '@/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
