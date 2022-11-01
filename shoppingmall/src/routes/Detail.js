import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail({ shoes }) {
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let goods = shoes.find((x) => (x.id = id)); //find()조건식에 맞는 자료를 남겨준다

  let Discount = styled.div`
    background-color: lightskyblue;
    width: 100%;
    text-align: center;
    padding: 10px;
  `;

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <>
      {alert === true ? <Discount>2초이내 구매시 할인</Discount> : null}

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src='https://codingapple1.github.io/shop/shoes1.jpg'
              width='100%'
              alt='listDetail'
            />
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{goods.title}</h4>
            <p>{goods.content}</p>
            <p>{goods.price}</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
