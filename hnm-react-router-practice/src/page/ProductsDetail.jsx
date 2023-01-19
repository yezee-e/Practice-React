import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetailAction } from '../redux/actions/productDetailAction';
import './ProductsDetail.scss';

function ProductsDetail() {
  const productDetail = useSelector((state) => state.detail.productDetail);
  const dispatch = useDispatch();

  const { id } = useParams();

  const getProductDetail = () => {
    dispatch(productDetailAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={productDetail?.img} alt='제품상세사진' />
        </Col>
        <Col className='product-info'>
          <div>{productDetail?.title}</div>
          <div>$ {productDetail?.price}</div>
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
