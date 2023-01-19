let initialState = {
  productDetail: [],
};

function detailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_DETAIL':
      return {
        ...state,
        productDetail: payload.data,
      };
    default:
      return { ...state };
  }
}

export default detailReducer;
