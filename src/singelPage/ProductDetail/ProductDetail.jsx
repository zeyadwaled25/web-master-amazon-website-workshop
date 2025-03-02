import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../ProductDetail/ProductDetail.module.css";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";



import Navbar from './../../Components/constant/Navbar/Navbar';
import Footer from './../../Components/constant/Footer/Footer';


export default function ProductDetail() {
  const [productDetails, setProductDetails] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentProductId, setcurrentProductId] = useState(0);
  const [loading, setloading] = useState(false);
  let { id, category } = useParams();
  let { addProductToCart } = useContext(CartContext);

  function getProductDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((response) => {
        setProductDetails(response.data.data);
      });
  }
  function getRelatedProducts(category) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/`)
      .then(({ data }) => {
        let allProducts = data.data;
        console.log(allProducts);
        let related = allProducts.filter(
          (product) => product.category.name == category
        );
        console.log(related);

        setRelatedProducts(related);
      });
  }
  async function addProduct(productId) {
    setcurrentProductId(productId);
    setloading(true);
    let response = await addProductToCart(productId);
    console.log(response);
    if (response.data.status === "success") {
      setloading(false);
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
  useEffect(() => {
    getProductDetails(id);
    getRelatedProducts(category);
  }, [id, category]);

  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
        <div className="row ">
          <div className="col-md-4 ">
            <img
              className="img-fluid w-75"
              src={productDetails.imageCover}
              alt={productDetails.title}
            />
          </div>
          <div className="col-md-4 ">
            <h1 className="h4 text-dark">{productDetails.title}</h1>
            <p className="text-muted mt-3">{productDetails.description}</p>
            <div className="d-flex justify-content-between ">
              <span>{productDetails.price} EGP</span>
              <span>
                {productDetails.ratingsAverage}{" "}
                <i className="fas fa-star text-warning"></i>
              </span>
            </div>
            <div className="border-top border-dark-subtle   my-2"></div>
            <div className="d-flex ">
              <span className="fa-s ">SAR</span>
              <span className="fs-3  mx-1">203</span>
              <span className="fs-6 text-muted">14</span>
            </div>
            <div className={style.font}>
              <p>All price include VAT.</p>
              <p>
                Sign in to redeem.
                <span className={style.productspan}>Extra 20%</span>
                off with meem credit cards.
              </p>
              <p>Enter code MEEM20 at checkout. Discount by Amazon.</p>
            </div>
            <div className="d-flex justify-content-between text-center gap-2">
              <div>
                <i className="fa-brands fa-cc-amazon-pay fs-5"></i>
                <div className="mt-2">Electronic Payment Only</div>
              </div>
              <div>
                <i className="fa-solid fa-rotate-left fs-5"></i>
                <div className="mt-2">30 Days Returnable</div>
              </div>
              <div>
                <i className="fa-solid fa-lock fs-5"></i>
                <div className="mt-2">Secure Transaction</div>
              </div>
            </div>
            <div className="border-top border-dark-subtle   my-2"></div>
            <div className="about">
              <h2 className="h6">About this Item</h2>
              <ul className={style.font}>
                <li>
                  Feature: square neck, cutout, puff sleeve, ruffle hem, tie
                  back aline dress
                </li>
                <li>Fabric has some stretch,and it's soft and comfortable</li>
                <li>
                  Suitable for daily wear, holidays, dating, vacation, weekend
                  casual
                </li>
                <li>
                  Care Instructions: Machine wash or professional dry clean
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="border border-dark rounded p-2">
              <div className="d-flex ">
                <span className="fa-s ">SAR</span>
                <span className="fs-3  mx-1">203</span>
                <span className="fs-6 text-muted">14</span>
              </div>
              <p>
                SAR96 delivery <span className="fw-bold">6-9 October.</span>
              </p>
              <span className={style.details}>Details</span>
              <div className="address">
                <i></i>
                <p className={style.details}>
                  Delivery to Riyadh - Update Location
                </p>
              </div>
              <p className={style.ship}>Usually ships within 4 to 5 days</p>
              <div className="buttons ">
                <button className="btn btn-light  mt-2 w-100 rounded-3">
                  Quantity :1
                </button>
                <button
                  onClick={() => addProduct(productDetails.id)}
                  className="btn btn-warning mt-2 w-100 rounded-3"
                >
                  Add to Cart
                </button>
                <button className="btn btn-primary mt-2 w-100 rounded-3">
                  {" "}
                  but now
                </button>
              </div>
              <div className={style.font}>
                <p> Ships from : Monatik LLC </p>
                <p>
                  {" "}
                  Sold by : <span className={style.details}>Monatik LLC </span>{" "}
                </p>
                <p>
                  {" "}
                  Payment :{" "}
                  <span className={style.details}>Secure transaction </span>{" "}
                </p>
              </div>
              <div className="border-top border-dark-subtle   my-2"></div>
              <button className="btn btn-light  mt-2 w-100 rounded-3">
                {" "}
                add to list
              </button>
            </div>
          </div>
          <div className="border-bottom  border-black   my-2"></div>
        </div>
      </div>
      <div className="row gap-5 p-xl-5 p-3  ">
        <div className="customer col-md-3 p-4">
          <h2 className="h6 fw-bold">Customer Reviews</h2>
          <div className="stars">
            <i className="fa-solid fa-star text-warning "></i>
            <i className="fa-solid fa-star text-warning "></i>
            <i className="fa-solid fa-star text-warning "></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-regular fa-star text-warning "></i>
            4.1 out of 5
          </div>
          <p className="text-muted py-2"> 1 global rating</p>
          <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>5 star</span>
              <span>0%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
              <span>4 star</span>
              <span>71%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning w-75"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
              <span>3 star</span>
              <span>0%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
              <span>2 star</span>
              <span>6%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning w-75"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
              <span>1 star</span>
              <span>0%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning"></div>
            </div>
          </div>
        </div>
        <div className="col-md-7 py-4 p-sm-4  ">
          <div className="customer-1">
            <h2 className="h6">Brooke</h2>
            <div className="stars fw-bold">
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning "></i>
              Favorite dress
            </div>
            <div className=" text-muted">
              <p className={style.font}>
                Reviewed in the United States on 6 August 2024
              </p>
              <p>
                size:40 | color:Black |{" "}
                <span className={style.ship}>Verfied Purchace</span>
              </p>
            </div>
            <div className={style.font}>
              <p>
                I initially purchased this dress on sale. It turned out to be my
                favorite dress of this summer. It is extremely versatile and
                unexpectedly flattering. When I accidentally tore it, I was
                really upset. My husband told me to buy it again, which I
                typically wouldn't do. It wasn't on sale and I am so frugal. The
                dress washes very well and I always get compliments when I wear
                it.
              </p>
            </div>
          </div>
          <div className="customer-2 py-4">
            <h2 className="h6">Eleva S.D</h2>
            <div className="stars fw-bold">
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              Lindo!!
            </div>
            <div className=" text-muted">
              <p className={style.font}>
                Reviewed in the Mexico on 11 August 2023
              </p>
              <span className={style.ship}>Verfied Purchace</span>
            </div>
            <p className={style.font}>
              Bien hecho, bonita tela y bonita caída, fresco y casual.La marca
              lo dice!!{" "}
            </p>
          </div>
          <div className="customer-3 py-4">
            <h2 className="h6">Ana Patricia Rodriguez</h2>
            <div className="stars fw-bold">
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-regular fa-star text-warning "></i>
              <i className="fa-regular fa-star text-warning "></i>
              COMODIDAD
            </div>
            <div className=" text-muted">
              <p className={style.font}>
                Reviewed in the United State on 29 June 2023
              </p>
              <span className={style.ship}>Verfied Purchace</span>
            </div>
            <p className={style.font}>
              ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA{" "}
            </p>
          </div>
          <div className="customer-4 py-4">
            <h2 className="h6">Ivelisse</h2>
            <div className="stars fw-bold">
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning "></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-regular fa-star text-warning "></i>
              Excellent dress
            </div>
            <div className=" text-muted">
              <p className={style.font}>
                Reviewed in the United State on 3 April 2019
              </p>
              <span className={style.ship}>Verfied Purchace</span>
            </div>
            <p className={style.font}>
              Lovely dress... I'm 5'1" with pear form body (149 pounds mostly in
              hips and booty) and it fits perfect.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4 p-xl-5 p-3">
        {relatedProducts.map((product) => (
          <div key={product.id} className="col-md-2 col-sm-6">
            <div className="product p-3 border rounded shadow-sm">
              <Link
                to={`/productdetail/${product.id}/${product.category.name} `}
                className="text-decoration-none"
              >
                <img
                  className="img-fluid w-100"
                  src={product.imageCover}
                  alt={product.title}
                />
                <span className="d-block text-success mt-2">
                  {product.category.name}
                </span>
                <h3 className="h6 text-dark">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{product.price} EGP</span>
                  <span>
                    {product.ratingsAverage}{" "}
                    <i className="fas fa-star text-warning"></i>
                  </span>
                </div>
                <button
                  onClick={() => addProduct(product.id)}
                  className="btn btn-warning mt-2 w-100"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
