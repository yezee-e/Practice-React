import { configureStore, createSlice } from '@reduxjs/toolkit';

//usestate와 비슷한 역할
let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },

  reducers: {
    changeName(state) {
      state.name = 'park';
    },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions; //state변경함수들 남음

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

let cartData = createSlice({
  name: 'cartData',
  initialState: [
    { id: 0, name: 'white and black', count: 2 },
    { id: 2, name: 'grey yordan', count: 1 },
  ],

  reducers: {
    countChange(state, action) {
      let findSameId = state.findIndex((a) => a.id == action.payload);
      state[findSameId].count++;
    },
    addCart(state, action) {
      state.push(action.payload);
    },
  },
});

export let { countChange, addCart } = cartData.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartData: cartData.reducer,
  },
});
