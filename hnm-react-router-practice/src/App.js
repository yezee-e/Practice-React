import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductsDetail from './page/ProductsDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Authenticate from './page/route/Authenticate';

// 전체상품페이지,로그인, 상품상세페이지
// navigation 만들기
// 전체상품페이지에서는 전체 상품을 볼 수 있다
// 로그인 버튼을 누르면 로그인 페이지가 나온다
// 상품디테일을 눌렀을 때 로그인x->로그인페이지로이동, 로그인o ->상품디테일페이지
// 로그아웃 버튼누르면 로그아웃되며 상품데이일페이지로 갈수없다
// 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 상품을 검색할 수 있다
function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log('aaaa', authenticate);
  }, [authenticate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<Authenticate />} />
      </Routes>
    </>
  );
}

export default App;
