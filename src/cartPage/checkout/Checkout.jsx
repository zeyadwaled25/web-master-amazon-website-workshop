import { useFormik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Checkout() {
  const [apiError, setapiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { checkOut } = useContext(CartContext);

  let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: '',
    },
    onSubmit: () => handleCheckout('67578f5c903ae68d4dc3edd2', 'http://localhost:5173')
  });

  async function handleCheckout(cartId, url) {
    let { data } = await checkOut(cartId, url, formik.values);
    if (data.status === 'success') {
      window.location.href = data.session.url;
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-success mb-4 fw-bold text-center">Checkout</h2>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="details"
                  id="details"
                  className="form-control"
                  placeholder="Enter Details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="details">Details</label>
              </div>

        
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="phone">Phone</label>
              </div>

           
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                  placeholder="Enter City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="city">City</label>
              </div>

     
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isLoading}
                >
                  {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Pay Now'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
