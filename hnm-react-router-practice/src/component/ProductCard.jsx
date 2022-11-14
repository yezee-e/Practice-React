import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

function ProductCard({ item }) {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div id='card' onClick={showDetail}>
      <div className='card-imgWrap'>
        <img src={item?.img} alt='제품이미지' className='card-img' />
      </div>

      <div>{item?.title}</div>
      <div> ${item?.price}</div>
      <div>{item?.choice == true ? '' : '품절'}</div>
      <div>{item?.new == true ? '신제품' : ''}</div>
    </div>
  );
}

export default ProductCard;
