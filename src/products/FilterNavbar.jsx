import { useEffect, useState } from "react";
import { Link } from "react-router";

function FilterNavbar({ setSpecialCategory, setSelectedPriceRange }) {
  const [categories, setCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    
    fetchCategories();
  }, []);

  return (
    <>
    <div className="">  
    <button className=" rounded-2 border-1 mb-3">
    <i class="fa-solid fa-heart me-3 text-danger "></i> 
          <Link to={'./wishlist'} className=" text-dark">Wish List</Link> </button>
      <button 
        className="filter-btn btn btn-primary" 
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>
      <div className={`filter-navbar filter-sidebar ${showFilters ? "show" : ""}`}>
        <div className="delivery mb-4">
          <p className="fw-bold">Delivery Day</p>
          <input type="radio" name="delivery-radio" id="delivery-radio" className="me-2" />
          <label htmlFor="delivery-radio">Get It in 2 Days</label>
        </div>
        <div className="review mb-4">
          <p className="fw-bold">Customer Reviews</p>
          <ul>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-solid fa-star"></i></li>
            <li><i className="fa-regular fa-star"></i></li>
            & up
          </ul>
        </div>
        <div className="brands mb-4">
          <p className="fw-bold">Brands</p>
          <ul>
            <li><input type="radio" name="brand" id="all" className="me-2" /><label htmlFor="all" onClick={() => setSpecialCategory('all')} >All</label></li>
            {categories.map(category => (
              <li key={category._id}><input type="radio" name="brand" id={category._id} className="me-2" /><label htmlFor={category._id} onClick={() => setSpecialCategory(category.name)} >{category.name}</label></li>
            ))}
          </ul>
        </div>
        <div className="price">
          <p className="fw-bold">Price</p>
          <ul>
            <li><input type="radio" name="price" id="all-price" className="me-2" /><label htmlFor="all-price" onClick={() => setSelectedPriceRange("all")}>All</label></li>
            <li><input type="radio" name="price" id="f100t5000" className="me-2" /><label htmlFor="f100t5000" onClick={() => setSelectedPriceRange([100, 500])}>₹100 to ₹500</label></li>
            <li><input type="radio" name="price" id="f500t1000" className="me-2" /><label htmlFor="f500t1000" onClick={() => setSelectedPriceRange([500, 1000])}>₹500 to ₹1000</label></li>
            <li><input type="radio" name="price" id="f1000t10000" className="me-2" /><label htmlFor="f1000t10000" onClick={() => setSelectedPriceRange([1000, 10000])}>₹1000 to ₹10,000</label></li>
            <li><input type="radio" name="price" id="f10000t50000" className="me-2" /><label htmlFor="f10000t50000" onClick={() => setSelectedPriceRange([10000, 50000])}>₹10,000 to ₹50,000</label></li>
          </ul>
        </div>
      </div>
    </div>

    </>
  )
}

export default FilterNavbar;