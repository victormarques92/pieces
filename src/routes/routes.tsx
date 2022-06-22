import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ArtistsRoutes from '../pages/Artists/routes';
import AuthenticationRoutes from '../pages/Authentication/routes';
import MakersRoutes from '../pages/Makers/routes';
import ShopRoutes from '../pages/Shop/routes';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ArtistsRoutes />
      <AuthenticationRoutes />
      <MakersRoutes />
      <ShopRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
