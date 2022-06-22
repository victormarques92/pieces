import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ArtistsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/artists" element={<h1>ArtistsRoutes</h1>} />
    </Routes>
  );
};

export default ArtistsRoutes;
