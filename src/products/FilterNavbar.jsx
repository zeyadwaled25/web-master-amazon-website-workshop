import { useEffect, useState } from "react";

function FilterNavbar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data = await response.json();
      setCategories(data.filter(id => id.id!== 12));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  fetchCategories();
  }, []);

  return (
    <div className="filter-navbar">
      <div className="delivery mb-4">
        <p>Delivery Day</p>
        <input type="radio" name="delivery-radio" id="delivery-radio" className="me-2" />
        <label htmlFor="delivery-radio">Get It in 2 Days</label>
      </div>
      <div className="review mb-4">
        <p>Customer Reviews</p>
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
        <p>Brands</p>
        <ul>
          {categories.map(category => (
            <li key={category.id}><input type="radio" name="brand" id={category.id} className="me-2" /><label htmlFor={category.id}>{category.name}</label></li>
          ))}
        </ul>
      </div>
      <div className="price">
        <p>Price</p>
        <ul>
          <li><input type="radio" name="price" id="all" className="me-2" /><label htmlFor="all">All</label></li>
          <li><input type="radio" name="price" id="f59t100" className="me-2" /><label htmlFor="f59t100">₹5900 to ₹10,000</label></li>
          <li><input type="radio" name="price" id="f100t200" className="me-2" /><label htmlFor="f100t200">₹10,000 to ₹20,000</label></li>
          <li><input type="radio" name="price" id="f200t300" className="me-2" /><label htmlFor="f200t300">₹20,000 to ₹30,000</label></li>
          <li><input type="radio" name="price" id="f300t400" className="me-2" /><label htmlFor="f300t400">₹30,000 to ₹45,000</label></li>
        </ul>
      </div>
    </div>
  )
}

export default FilterNavbar;