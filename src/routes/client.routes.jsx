import { Routes, Route, Navigate } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';

export function ClientRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path='*' element={<Navigate to="/"/>} />
    </Routes>
  );
}