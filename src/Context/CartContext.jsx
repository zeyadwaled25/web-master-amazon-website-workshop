import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export function CartContextProvider(props) { // Ensure this is a named export
  const [cart, setCart] = useState(null);
  const [numOfCartItems, setNumOfCartItems] = useState(0);

  let headers = {
    token: localStorage.getItem("token"),
  };

  function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function addProductToCart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId,
        },
        {
          headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function updateCartItemCount(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: count,
        },
        {
          headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function deleteProductItem(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function checkOut(cartId, url, formValues) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        {
          shippingAddress: formValues,
        },
        {
          headers,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  async function getCart() {
    let response = await getLoggedUserCart();
    setCart(response.data);
    return response.data; // Ensure this returns the data
  }

  useEffect(() => {
    async function getUserCart() {
      const data = await getCart();
      setNumOfCartItems(data?.numOfCartItems || 0); // Ensure numOfCartItems is updated correctly
    }
    getUserCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        checkOut,
        getLoggedUserCart,
        addProductToCart,
        updateCartItemCount,
        deleteProductItem,
        numOfCartItems,
        setNumOfCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
