import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge, countChange } from '../store';

function Cart() {
  let state = useSelector((state) => state); //리덕스 스토어에 있던 state가 남음
  let dispatch = useDispatch(); //store.js로 요청을 보내주는 함수

  return (
    <div>
      <h1>
        {state.user.name} {state.user.age}의 장바구니
      </h1>

      <button
        onClick={() => {
          dispatch(changeAge(100));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cartData.map((list, i) => (
            <tr key={i}>
              <td>{state.cartData[i].id}</td>
              <td>{state.cartData[i].name}</td>
              <td>{state.cartData[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(countChange(state.cartData[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
