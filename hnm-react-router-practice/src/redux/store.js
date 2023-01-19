//기존 리덕스는 createStore 사용

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index'; //reducer파일들을 전부 가지고 온다
// import { composeWithDevTools } from 'redux-devtools-extension';

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

//최신 툴킷은 configureStore사용

import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './reducers/authenticateReducer';
import productReducer from './reducers/productReducer';
import detailReducer from './reducers/detailReducer';

export default configureStore({
  reducer: {
    //index.js에서 작업한 combineReducer
    auth: authenticateReducer,
    product: productReducer,
    detail: detailReducer,
  },
});


