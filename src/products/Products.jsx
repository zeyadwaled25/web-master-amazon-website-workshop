import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext"; // Import WishlistContext
import useProduct from "../Hooks/UseProduct";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

function Products({ selectedCategory, selectedPriceRange }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentProductId, setcurrentProductId] = useState(0);
  const [loading, setloading] = useState(false);

  const { addProductToCart, setNumOfCartItems } = useContext(CartContext);
  const { addProductToWishlist, clearProduct, NumberOfFavourite } =
    useContext(WishlistContext); // Use WishlistContext

  const [wishlist, setWishlist] = useState([]); // Local state to track wishlist items

  // Fetch wishlist on component mount
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await getWishlist();
        if (response.data?.status === "success") {
          setWishlist(response.data.data.map((item) => item._id));
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    fetchWishlist();
  }, []);

  // Function to toggle wishlist
  const toggleWishlist = async (productId) => {
    if (wishlist.includes(productId)) {
      // Remove from wishlist
      const response = await clearProduct(productId);
      if (response.data?.status === "success") {
        setWishlist(wishlist.filter((id) => id !== productId));
        toast.success("Removed from wishlist", {
          duration: 2000,
          position: "top-right",
        });
      }
    } else {
      // Add to wishlist
      const response = await addProductToWishlist(productId);
      if (response.data?.status === "success") {
        setWishlist([...wishlist, productId]);
        toast.success("Added to wishlist", {
          duration: 2000,
          position: "top-right",
        });
      }
    }
  };

  async function addProduct(productId) {
    setcurrentProductId(productId);
    setloading(true);
    let response = await addProductToCart(productId);
    console.log(response);
    if (response.data.status === "success") {
      setloading(false);
      setNumOfCartItems(response.data.numOfCartItems);
      toast.success(response.data.message, {
        duration: 2000,
        position: "top-right",
      });
    } else {
      setloading(false);
      toast.error(response.data.message, {
        duration: 2000,
        position: "top-right",
      });
    }
  }

  let { data, isError, error, isFetching, isLoading } = useProduct();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products"
        );
        const data = await response.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category.name === selectedCategory
      );
    }

    if (selectedPriceRange !== "all" && Array.isArray(selectedPriceRange)) {
      filtered = filtered.filter(
        (product) =>
          product.price >= selectedPriceRange[0] &&
          product.price <= selectedPriceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRange, products]);

  return (
    <div className="products row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="col mb-4">
            <div className="card gap-3 h-100">
              <img
                src={product.images[0]}
                className="card-img-top p-3"
                alt={product.title}
              />
              <div className="card-body d-flex flex-column gap-3">
                <h6 className="card-title m-0">{product.title}</h6>
                <div className="rating">
                  <span className="stars text-warning">★★★★☆</span>
                  <span className="rating-count text-muted ms-1">650</span>
                  <div className="text-muted small">
                    300+ bought in past month
                  </div>
                </div>
                <div className="purchase-info">
                  <div className="price">
                    <span className="fw-bold fs-5">₹{product.price}</span>
                    <span className="text-muted ms-2">(46% off)</span>
                  </div>
                  <small className="text-muted d-block mb-3">
                    Save extra with No Cost EMI
                  </small>
                  <small className="text-muted d-block mb-2">
                    FREE delivery by{" "}
                    <span className="fw-bold">
                      Sat,14 Sept,
                      <br /> 7:00 am - 9:00 pm
                    </span>
                  </small>
                </div>
                <div className="d-flex justify-content-between item">
                  <button
                    onClick={() => addProduct(product.id)}
                    className="btn btn-warning mt-auto rounded-pill add-to-cart d-flex"
                  >
                    Add to cart
                  </button>
                  {/* Favourite Icon */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="btn btn-link text-danger p-0"
                  >
                    {wishlist.includes(product.id) ? (
                      <FaHeart size={24} /> // Filled heart if in wishlist
                    ) : (
                      <FaRegHeart size={24} /> // Outline heart if not in wishlist
                    )}
                  </button>
                </div>

                <Link
                  to={`/productdetail/${product.id}/${product.category.name}`}
                >
                  <button className="btn btn-warning mt-auto rounded-pill add-to-cart">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noavailable d-flex justify-content-center align-items-center flex-column text-center w-100">
          <p>
            No Products Available in{" "}
            {<span className="fw-bold">{selectedCategory}</span>} Just Now.
          </p>
          <img
            src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
            alt="No Products Available"
            className="mb-3"
            style={{ width: "300px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Products;