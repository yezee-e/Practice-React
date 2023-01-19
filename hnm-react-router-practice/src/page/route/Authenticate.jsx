import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProductsDetail from '../ProductsDetail';

function Authenticate() {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductsDetail /> : <Navigate to='/login' />;
}

export default Authenticate;
