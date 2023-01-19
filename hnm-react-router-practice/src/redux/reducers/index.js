import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productReducer from './productReducer';
import detailReducer from './detailReducer';

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
  detail: detailReducer,
});

//객체의 형태로 합칠 reducer를 다 넣어준다
