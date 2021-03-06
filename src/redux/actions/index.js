
export const setUser = (values) => {
  return {
      type: "SET_USER",
      payload: values
  }
}

export const loginAction = (users) => {
  return {
      type: "LOGIN",
      payload: users
  }
}

export const logoutAction = () => {
  return {
      type: "LOGOUT",
  }
}

export const resetCart = () => {
 return {
   type: 'RESET_CART'
 }
}

export const setUsers = (users) => {
  return {
      type: "SET_USERS",
      payload: users
  }
}

export const setOrder = (values) => {
  return {
    type: "SET_ORDER",
    payload: values
  }
}

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const addProduct = (product) => {

  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  };
};

export const openCart = (open) => {
  return {
    type: "OPEN_CART",
    payload: open

  }
}

export const setOrderTotal = (values) => {
  return {
    type: "SET_ORDER_TOTAL",
    payload: values
  }
}