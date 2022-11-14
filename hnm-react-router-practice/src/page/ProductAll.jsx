import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

function ProductAll() {
  const [productList, setProductsList] = useState([]);
  const [query, setQuery] = useSearchParams([]);

  const getProducts = async () => {
    let searchQuery = query.get('search');
    console.log('쿼리값은?', searchQuery);
    let url = `http://localhost:3004/products?search=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductsList(data);
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
