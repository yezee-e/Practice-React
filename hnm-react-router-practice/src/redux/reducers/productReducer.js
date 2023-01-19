import { createSlice } from '@reduxjs/toolkit'; //createSlice는 객체를 매개변수로 받는다 =>반드시 3개의 fild가 필요하다

let initialState = {
  productList: [],
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCTS':
//       return { ...state, productList: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions; //dispatch하기 위해 export
export default productSlice.reducer;
