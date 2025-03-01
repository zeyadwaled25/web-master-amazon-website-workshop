import { useFormik } from "formik";
import * as yup from "yup";
import "./Login.css";
import { loginUser } from "../fakeAuthService/fakeAuthService"; // Import API
import { useNavigate } from "react-router-dom";
import amazon from "./amazon.jpg";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


function Login() {
  const navigate = useNavigate();
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

  const validationSchema = yup.object({
    phone: yup
      .string()
      .matches(/^(01)[0125][0-9]{8}$/, "invalid egyptian number format")
      .required("Phone number is required"),
    
  });

  // Define the onSubmit function

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
     
      phone: "",
    },
    validationSchema,
    onSubmit
  });
  async function onSubmit(values) {
    try {
      console.log("Submitting phone:", values.phone); // Debugging
      const response = loginUser(values.phone); // Pass phone as a string

      if (response.success) {
          alert(response.message);
          navigate("/"); // Redirect after successful login
          setIsLoggedIn(true)
      } else {
          alert(response.message); // Show error message
          setIsLoggedIn(false)
      }
  } catch (error) {
      console.error("Login error:", error);
  }
  }
  return (
    <>
      <div className="container register   d-flex justify-content-center align-items-center flex-column mb-1 w-50 p-2 rounded rounded-3 border-black border-1 border mt-1">
        <div className="w-25">
          <img src={amazon} alt="amazon-logo" className="w-100" srcSet="" />
        </div>
        <form onSubmit={formik.handleSubmit} className="w-50 ">
        <h1>Sign in</h1>
          <div className="mb-3">
            <label htmlFor="phone">Email or mobile phone number</label>
            <input
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              type="text"
              className="form-control w-100"
              id="phone"
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="alert alert-danger text-white">
                {formik.errors.phone}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-warning form-control">
            Continue
          </button>
        </form>
        <div className="w-50 mb-1 footer-register">
          <p >
            By continuing, you agree to Amazon’s
            <span className="text-primary"> Conditions of Use</span>
            and
            <span className="text-primary"> Privacy Notice. </span>
          </p>
          <p className="text-primary">Need help ?</p>
          <hr />
          <p className="fw-bold">
            Buying for work ?
           
          </p>
          <p className="text-primary">
            Shop on Amazon Business
           
           
          </p>
        </div>
      </div>
            <div className="w-50 text-center container amazon">
              <p className="position-relative">New to Amazon?</p>

              <button className="btn border border-2 rounded rounded-3" onClick={()=>navigate("/Register")}>Create your Amazon account</button>
            </div>
<Footer/>     
    </>
  );
}

export default Login;
