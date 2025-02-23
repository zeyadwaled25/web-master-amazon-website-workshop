import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import './Register.css';
import { registerUser } from "../fakeAuthService/fakeAuthService"; // Import API
import {  NavLink, useNavigate } from 'react-router-dom';
import amazon from './imgs/amazon.jpg'
import Footer from '../Footer/Footer';


function Register() {

const navigate=useNavigate()


  const validationSchema = yup.object({
    name: yup.string().min(3).max(10).required("Name is required"),
   phone: yup.string().matches(/^(01)[0125][0-9]{8}$/, "invalid egyptian number format").required("Phone number is required"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Password must be at least 6 characters long and contain at least one letter and one number")
      .required("Password is required"),
    
    
  });

  // Define the onSubmit function


  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
     
    },
    validationSchema,
    onSubmit
  })
  async function onSubmit(values) {
    try {
      // Ensure the correct object structure
      const userData = {
          name: values.name,
          phone: values.phone,
          password: values.password
      };

      var response = registerUser(userData); // Pass userData as an object
      alert(response.message);
      if(alert(response.message)==="User registered successfully!"){
        navigate('/login')
      }
      
  } catch (error) {
      console.error("Error:", error);
  }
  }

  return (
    <>
    <div className="container register   d-flex justify-content-center align-items-center flex-column mb-1 w-50 p-2 rounded rounded-3 border-black border-1 border mt-1">
     <div className="w-25">
     <img src={amazon} alt="amazon-logo" className='w-100' srcset="" />

     </div>
      <form onSubmit={formik.handleSubmit} className='w-50 '>
      <h1 className='me-auto'>Create Account</h1>
        <div className="mb-3">
          <label htmlFor="name" >Your Name</label>
          <input
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            className="form-control w-100"
            id="name"
          />
          {formik.errors.name && formik.touched.name && <div className="alert alert-danger text-white">{formik.errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Your Phone</label>
          <input
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            type="tel"
            className="form-control w-100"
            id="phone"
          />
          {formik.errors.phone && formik.touched.phone && <div className="alert alert-danger text-white">{formik.errors.phone}</div>}
        </div>

      

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            className="form-control w-100"
            id="password"
          />
          {formik.errors.password && formik.touched.password && <div className="alert alert-danger text-white">{formik.errors.password}</div>}
        </div>

        

        <button type="submit" className="btn btn-warning form-control">Verify mobile number</button>
        <hr />
      </form>
      <div className='w-50 mb-1 footer-register' >
        <p className='fw-bold'>Buying for work ?</p>
        <NavLink className="text-primary text-decoration-none">Create a free business account</NavLink>
        <hr />
        <p>Already have an account? <span className="text-primary text-decoration-none" onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>Sign in</span></p>
      <p>By creating an account or logging in , you agree to Amazon’s <span className='text-primary text-decoration-underline'>Conditions of Use </span>  and <span className='text-primary text-decoration-underline'>Privacy Center</span></p>

      </div>
    </div>
     <Footer/>
    </>
  );
}

export default Register;
