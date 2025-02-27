import { CiLocationOn } from "react-icons/ci";
import './Navbar.css'


import { FaSearch} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 px-lg-5 py-2">
      <div className="container-fluid">
        {/* Left Section - Logo & Location */}
        <a className="navbar-brand d-flex align-items-center" href={'./'}>
          <img
            src="src\assets\Amazon.png"
            alt="Amazon Logo"
            height="50"
            className="me-2"
          />
        </a>

        <div className="d-flex align-items-center text-white">
          <CiLocationOn className="text-light fa-xl fa-bold me-1 mt-3" />
          <div>
            <p className="m-0 small text-secondary">Delivering to Surat 394210</p>
            <p className="m-0 fw-bold">Update location</p>
          </div>
        </div>

        {/* Center - Search Bar */}
        <form className="search d-flex  mx-3">
          <select className="form-select py-3 w-auto">
            <option className=" mb-3">All</option>
          </select>
          <input
            type="text"
            className=" py-3 px-2"
            placeholder="Search Amazon.in"
          />
          <button className="Btn btn-warning  px-2 py-3">
            <FaSearch className="text-dark mb-3" />
          </button>
        </form>

        
       
        {/* Right Section - Account, Orders, Cart */}
        <div className="right d-flex align-items-center text-white ms-3">
        <div className="lang d-flex justify-content-center align-items-center">
        <img src="src\assets\lang.png" alt="language" />
         <select >
            <option value="EN" className=" bg-transparent">EN</option>
         </select>

        </div>
          <div className="me-3">
            <p className="m-0 small text-secondary">Hello, Sign in</p>
           <select name="" id="" className=" d-flex justify-content-center align-items-center">
            <option value="Account &Lists">Account &Lists</option>
           </select>
          </div>
          <div className="">
            <p className="m-0 fw-bold w-75">Returns & Orders</p>
          </div>

          <div className="cart d-flex align-items-center justify-content-center">
          <img src="src\assets\cart.png" alt="" />
          <p className=" mt-3">Cart</p>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
