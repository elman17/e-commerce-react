import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userData } from '../Helper';

const ProtectedRoutes = () => {
    const { jwt } = userData();
    return jwt ? <Outlet /> : <Navigate to="/Signiin" />;
};

export default ProtectedRoutes;
