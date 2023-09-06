import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userData } from '../Helper'

const AuthRoutes = () => {
    const { jwt } = userData();
    return !jwt ? <Outlet /> : <Navigate to="/" />
}

export default AuthRoutes