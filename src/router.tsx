import { BrowserRouter, Route, Routes } from 'react-router';
import { RootPage } from '@/pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </BrowserRouter>
  );
}
