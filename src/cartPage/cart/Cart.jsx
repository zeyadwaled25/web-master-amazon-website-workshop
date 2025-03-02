import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/constant/Navbar/Navbar";
import Footer from "../../components/constant/Footer/Footer";

export default function Cart() {
  let { getLoggedUserCart, updateCartItemCount, deleteProductItem,setNumOfCartItems } =
    useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);

  async function getCartItems() {
    let response = await getLoggedUserCart();
    console.log(response.data.data);
    setCartDetails(response.data.data);
  }
  async function updateCartCount(productId, count) {
    let response = await updateCartItemCount(productId, count);
    console.log(response.data.data);
    setCartDetails(response.data.data);
  }
  async function deleteCart(productId) {
    let response = await deleteProductItem(productId);
    console.log(response.data.data);
    setCartDetails(response.data.data);
    setNumOfCartItems(response.data.numOfCartItems)
  }
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <>
      <Navbar/>
        <div className="container my-5">
          <h2 className="text-center text-success mb-4">Shopping Cart</h2>
          <h3 className="text-center text-secondary">
            Total Cart Price: {cartDetails?.totalCartPrice} EGP
          </h3>

          <div className="table-responsive">
            <table className="table table-bordered table-hover mt-4">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="text-center">
                    Image
                  </th>
                  <th scope="col">Product</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartDetails?.products.map((product) => (
                  <tr key={product.product.id}>
                    <td className="text-center">
                      <img
                        src={product.product.imageCover}
                        className="img-fluid"
                        alt={product.product.title}
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td className="fw-semibold">{product.product.title}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={() =>
                            updateCartCount(product.product.id, product.count - 1)
                          }
                          className="btn btn-outline-secondary btn-sm me-2"
                        >
                          -
                        </button>
                        <span>{product.count}</span>
                        <button
                          onClick={() =>
                            updateCartCount(product.product.id, product.count + 1)
                          }
                          className="btn btn-outline-secondary btn-sm ms-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="fw-semibold">{product.price} EGP</td>
                    <td>
                      <button
                        onClick={() => deleteCart(product.product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link to="/Checkout">
              <button className="btn btn-primary">Check Out</button>
            </Link>
          </div>
        </div>
      <Footer/>
    </>
  );
}
