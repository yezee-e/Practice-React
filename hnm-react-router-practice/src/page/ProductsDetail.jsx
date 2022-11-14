import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductsDetail.scss';

function ProductsDetail() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;

    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt='제품상세사진' />
        </Col>
        <Col className='product-info'>
          <div>{product?.title}</div>
          <div>$ {product?.price}</div>
          <Dropdown>
            <Dropdown.Toggle
              id='dropdown-button-dark-example1'
              variant='Light'
              className='size-btn'
            >
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              <Dropdown.Item>S</Dropdown.Item>
              <Dropdown.Item>M</Dropdown.Item>
              <Dropdown.Item>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='dark' className='add-btn'>
            Dark
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsDetail;
