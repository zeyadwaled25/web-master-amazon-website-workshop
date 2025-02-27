import { HiMiniBars3 } from "react-icons/hi2";

import "./HomeNav.css"; // Custom styles

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-1 ps-4">
      <div className="container-fluid">
        {/* Left Side - Menu Icon & Branding */}
        <button className="btn text-light gap-1 me-2 d-flex justify-content-center align-items-center">
          <HiMiniBars3 className=" fs-3 "/>
          <a className="navbar-brand" href="#">All</a>
        
        </button>

        {/* Toggle Button for Small Screens */}
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row flex-wrap">
            <li className="nav-item">
              <a className="nav-link" href="#">Amazon mini TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Best Sellers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{`Today's Deals`}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mobiles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customer Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Prime</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Electronics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Fashion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Releases</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Home & Kitchen</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Amazon Pay</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
