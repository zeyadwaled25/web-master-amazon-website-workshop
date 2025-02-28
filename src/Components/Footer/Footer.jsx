import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <>
      {/* Back to Top Section */}
      <div className="text-center bg-dark py-3">
        <p className="p-3 m-0 text-light">Back to Top</p>
      </div>

      {/* Main Footer Section */}
      <section className="text-white bg-dark py-5">
        <div className="container">
          <div className="row">
            {/* Column 1: Get to Know Us */}
            <div className="col-6 col-md-3 mb-4 ">
              <h3>Get to Know Us</h3>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Amazon Science</li>
              </ul>
            </div>

            {/* Column 2: Connect with Us */}
            <div className="col-6 col-md-3 mb-4 ">
              <h3>Connect with Us</h3>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>

            {/* Column 3: Make Money with Us */}
            <div className="col-6 col-md-3 mb-4 ">
              <h3>Make Money with Us</h3>
              <ul className="list-unstyled">
                <li>Sell on Amazon</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Amazon Global Selling</li>
                <li>Supply to Amazon</li>
                <li>Become an Affiliate</li>
                <li>Fulfilment by Amazon</li>
                <li>Advertise Your Products</li>
                <li>Amazon Pay on Merchants</li>
              </ul>
            </div>

            {/* Column 4: Let Us Help You */}
            <div className="col-6 col-md-3 mb-4 ">
              <h3>Let Us Help You</h3>
              <ul className="list-unstyled">
                <li>Your Account</li>
                <li>Returns Center</li>
                <li>Recalls and Product Safety Alerts</li>
                <li>100% Purchase Protection</li>
                <li>Amazon App Download</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
          <hr />

          {/* Language and Country Selector */}
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center gap-3">
              <img src="src/assets/Amazon.png" alt="Amazon Logo" className="img-fluid" />
              <div className="d-flex align-items-center gap-2 border p-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00003 3.8147e-06C13.9706 3.8147e-06 18 4.02944 18 9.00002C18 13.9706 13.9706 18 9.00003 18C4.02944 18 0 13.9706 0 9.00002C0 4.02944 4.02944 3.8147e-06 9.00003 3.8147e-06ZM11.6446 13.0491H6.3554C6.94215 15.2216 7.96204 16.6502 9.00003 16.6502C10.038 16.6502 11.0578 15.2216 11.6446 13.0491ZM4.95812 13.0497L2.50825 13.0496C3.37062 14.4291 4.66053 15.5139 6.19244 16.1187C5.72246 15.3809 5.33463 14.4574 5.04937 13.4051L4.95812 13.0497ZM15.4918 13.0496L13.0419 13.0497C12.7506 14.2499 12.3298 15.299 11.8066 16.1187C13.2437 15.5517 14.4672 14.5628 15.3252 13.3047L15.4918 13.0496ZM4.58477 7.19971H1.56338L1.55911 7.21524C1.42225 7.78782 1.34979 8.38542 1.34979 9.00002C1.34979 9.95046 1.52309 10.8603 1.83982 11.6999L4.69523 11.6995C4.56718 10.8455 4.49931 9.93822 4.49931 9.00002C4.49931 8.38452 4.52852 7.78233 4.58477 7.19971ZM12.0568 7.19977H5.94325C5.88204 7.77594 5.8491 8.37858 5.8491 9.00002C5.8491 9.95343 5.92662 10.8626 6.06483 11.6997H11.9352C12.0734 10.8626 12.1509 9.95343 12.1509 9.00002C12.1509 8.37858 12.118 7.77594 12.0568 7.19977ZM16.437 7.19896L13.4153 7.19973C13.4715 7.78233 13.5007 8.38452 13.5007 9.00002C13.5007 9.93822 13.4328 10.8455 13.3048 11.6995L16.1602 11.6999C16.4769 10.8603 16.6502 9.95046 16.6502 9.00002C16.6502 8.37966 16.5764 7.77657 16.437 7.19896ZM6.19339 1.88135L6.17278 1.88919C4.33048 2.62232 2.84029 4.05068 2.02621 5.85028L4.7691 5.85061C5.05108 4.27334 5.54316 2.90022 6.19339 1.88135ZM9.00003 1.3498L8.89591 1.35457C7.75723 1.45873 6.65716 3.26022 6.14629 5.85023H11.8538C11.3443 3.26749 10.2489 1.46883 9.11368 1.35548L9.00003 1.3498ZM11.8076 1.8814L11.9037 2.03806C12.5059 3.03913 12.9632 4.35282 13.2309 5.85061L15.9738 5.85028C15.1958 4.13028 13.8001 2.74941 12.0696 1.99053L11.8076 1.8814Z"
                    fill="#B4B4B4"
                  />
                </svg>
                <p className="m-0">English</p>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 0.599998L7.4641 5.4H0.535898L4 0.599998Z"
                    fill="#B4B4B4"
                  />
                  <path d="M4 13.4L7.4641 8.6H0.535898L4 13.4Z" fill="#B4B4B4" />
                </svg>
              </div>
              <div className="d-flex align-items-center gap-2 border p-2">
                <img
                  src="src/assets/lang.png"
                  alt="Language Icon"
                  className="img-fluid"
                />
                <p className="m-0">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer Section */}
      <div className="bg-dark text-light py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4  links text-light">
              <h6>AbeBooks</h6>
              <p className="">Books, art & collectibles</p>
              <h6>Shop bop</h6>
              <p className="">Designer Fashion Brands</p>
            </div>
            <div className="col-6 col-md-3 mb-4 ">
              <h6>Amazon Web Services</h6>
              <p className="">Scalable Cloud Computing Services</p>
              <h6>Amazon Business</h6>
              <p className="">Everything For Your Business</p>
            </div>
            <div className="col-6 col-md-3 mb-4 ">
              <h6>Audible</h6>
              <p className="">Download Audio Books</p>
              <h6>Prime Now</h6>
              <p className="">2-Hour Delivery on Everyday Items</p>
            </div>
            <div className="col-6 col-md-3 mb-4 ">
              <h6>IMDb</h6>
              <p className="">Movies, TV & Celebrities</p>
              <h6>Amazon Prime Music</h6>
              <p className="">
                100 million songs, ad-free <br />
                Over 15 million podcast episodes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-dark text-light py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center ">
              <p className="m-0">Conditions of Use & Sale</p>
              <p className="m-0">Privacy Notice</p>
              <p className="m-0">Interest-Based Ads</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-dark text-light py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="m-0">1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}