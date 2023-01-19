//미들웨어를 저장하는 공간

import { productActions } from '../reducers/productReducer';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:3004/products?search=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getAllProducts({ data }));
  };
}

export const productAction = { getProducts }; //객체에 함수를 담아서 반환(여러개의 함수를 하나의 객체에 담아서 리턴할 예정이기 때문에)

//미들웨어 함수는 함수를 리턴한다
//리턴하는 함수는 두개의 매개변수가 있다(dispatch, getState)
