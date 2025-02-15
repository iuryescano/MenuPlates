import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NewPlate } from '../pages/NewPlate';
import { EditPlate } from '../pages/EditPlate';

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newplate" element={<NewPlate />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
    </Routes>
  );
}