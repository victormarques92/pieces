import React from 'react';
import { Route, Routes } from 'react-router-dom';

const MakersRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/makers" element={<h1>MakersRoutes</h1>} />
    </Routes>
  );
};

export default MakersRoutes;
