import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import toast from "react-hot-toast";

function WishItem({ p, setWishDetails, getWishlistCart }) {
  const { clearProduct } = useContext(WishlistContext);
  const [removeWishL, setRemoveWishL] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const { addProductToCart, setNumOfCartItems } = useContext(CartContext);

  async function RemoveWishList(wId) {
    setRemoveWishL(true);
    const { data } = await clearProduct(wId);
    setRemoveWishL(false);
    setWishDetails(data);
    getWishlistCart();
  }
  async function addProduct(id) {
    setAddCart(true);
    const { data } = await addProductToCart(id);
    setAddCart(false);
    setNumOfCartItems(data.numOfCartItems);
    console.log(data);
    if (data?.status === "success") {
      toast.success("added");
    } else {
      toast.error("failed");
    }
    RemoveWishList(id);
  }

  return (
    <>
      <div className="d-flex align-items-center shadow-sm p-3 my-3 border rounded">
        <div className="me-3">
          <img
            src={p.imageCover}
            alt={p.title}
            className="img-fluid"
            style={{ width: "100px", height: "150px", objectFit: "cover" }}
          />
        </div>

        <div className="flex-grow-1 text-start px-3">
          <h5 className="mb-1">{p.title}</h5>
          <p className="text-danger small mb-1">{p.name}</p>
          <p className="text-success small fw-bold">{p.price} EGP</p>

          <button
            disabled={removeWishL}
            onClick={() => RemoveWishList(p.id)}
            className="btn btn-link text-danger p-0 small"
          >
            {removeWishL ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              <>
                <i className="fas fa-trash me-1"></i> Remove
              </>
            )}
          </button>
        </div>

        <button
          onClick={() => addProduct(p.id)}
          disabled={addCart}
          className="btn btn-success px-3 py-2"
        >
          {addCart ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <>Add to Cart</>
          )}
        </button>
      </div>
    </>
  );
}

export default WishItem;
