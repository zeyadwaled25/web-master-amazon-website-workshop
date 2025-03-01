import { HiMiniBars3 } from "react-icons/hi2";
import "./HomeNav.css"; // Custom styles
import { Link } from "react-router";

const HomeNav = () => {
  return (
    <nav className="navbar navbar-expand-lg px-1 ps-4">
      <div className="container-fluid">
        {/* Left Side - Menu Icon & Branding */}
        <Link to="/products" className="btn text-light navbar-brand gap-1 me-2 d-flex justify-content-center align-items-center">
          <HiMiniBars3 className=" fs-3 " />
            All
        </Link>

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
              <Link className="nav-link" to="/products">
                Amazon mini TV
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Best Sellers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">{`Today's Deals`}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Mobiles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Customer Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Prime
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Fashion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                New Releases
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Home & Kitchen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Amazon Pay
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
