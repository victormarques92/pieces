import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AuthenticationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/authentication"
        element={<h1>AuthenticationRoutes</h1>}
      />
    </Routes>
  );
};

export default AuthenticationRoutes;
