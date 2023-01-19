import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { productAction } from '../redux/actions/productAction';

function ProductAll() {
  const productList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams('');

  const getProducts = () => {
    let searchQuery = query.get('search');
    dispatch(productAction.getProducts(searchQuery));
    //dispatch를 store로 바로 보내는게 아니라 미들웨어를 거칠 수 있도록 작업
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductAll;
