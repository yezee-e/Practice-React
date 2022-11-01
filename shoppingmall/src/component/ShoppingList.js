import React from 'react';
import { Col } from 'react-bootstrap';

import './ShoppingList.scss';

function ShoppingList({ shoes, img }) {
  return (
    <Col md={4} className='shoppingList'>
      <img
        src={`https://codingapple1.github.io/shop/shoes${img + 1}.jpg`}
        alt='shoppingList'
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  );
}

export default ShoppingList;
