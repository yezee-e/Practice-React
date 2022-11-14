import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductsDetail from '../ProductsDetail';

function Authenticate({ authenticate }) {
  return authenticate == true ? <ProductsDetail /> : <Navigate to='/login' />;
}

export default Authenticate;
