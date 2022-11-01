import './App.scss';
import React, { useState } from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail';
import Event from './routes/Event';
import data from './data.js';
import ShoppingList from './component/ShoppingList';
import axios from 'axios';

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  const fetchData = () => {
    axios
      .get('https://codingapple1.github.io/shop/data2.json')
      .then((data) => {
        console.log(data.data);
        setShoes([...shoes, ...data.data]);
      })
      .catch(() => '로딩실패');
  };

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}
          >
            YezzShop
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/event');
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <div>
              <div className='main-bg'></div>
              <Container>
                <Row
                  onClick={(e) => {
                    navigate('/detail');
                  }}
                >
                  {shoes.map((list, i) => (
                    <ShoppingList shoes={shoes[i]} img={i} key={list.id} />
                  ))}
                </Row>
              </Container>
              <Container>
                <Row>
                  <button onClick={() => fetchData()}>버튼</button>
                </Row>
              </Container>

              <a href='http://www.freepik.com'>Designed by Freepik</a>
            </div>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/event' element={<Event />}>
          <Route
            path='one'
            element={<div>첫주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path='*' element={<div>잘못된 페이지입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
