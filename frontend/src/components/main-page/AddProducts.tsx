import React from 'react'
import { ProductForm } from './ProductForm'
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const AddProducts = () => {


    const { token, email } = useAuth()
    if (!token) {
        return <Navigate to='/loginForm' />

    }


    return <div>
        <div><h2>Admin Zone</h2>
            <h3>Welcome {email}</h3>

        </div>
        <ProductForm />
    </div>
}