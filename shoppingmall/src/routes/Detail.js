import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Detail.scss';
import { addCart } from '../store.js';
import { useDispatch } from 'react-redux';

function Detail({ shoes }) {
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  let dispatch = useDispatch();

  let goods = shoes.find((x) => (x.id = id)); //find()조건식에 맞는 자료를 남겨준다

  //문구 넣었다가 없애기
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <>
      {alert === true ? (
        <div
          style={{
            backgroundColor: 'lightblue',
            width: '100%',
            textAlign: 'center',
            padding: '10px',
          }}
        >
          2초이내 구매시 할인
        </div>
      ) : null}

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
            <button
              className='btn btn-danger'
              onClick={dispatch(addCart({ id: 3, name: ' black', count: 4 }))}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
      <br />
      <Nav variant='tabs' defaultActiveKey='link-1'>
        <Nav.Item>
          <Nav.Link eventKey='link-1' onClick={() => setTab(0)}>
            후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2' onClick={() => setTab(1)}>
            상세설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3' onClick={() => setTab(2)}>
            문의사항
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {tab == 0 ? <div>내용0</div> : null}
        {tab == 1 ? <div>내용1</div> : null}
        {tab == 2 ? <div>내용2</div> : null}
      </div>
    </>
  );
}

export default Detail;
