function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `http://localhost:3004/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    dispatch({ type: 'GET_DETAIL', payload: { data } });
  };
}

export const productDetailAction = { getProductDetail };
