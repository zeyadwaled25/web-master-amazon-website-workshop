import { useState } from "react";
import FilterNavbar from "./FilterNavbar";
import Products from "./Products";
import './productsPage.css'

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  return (
    <div className="product-page">
      <FilterNavbar
      setSpecialCategory={setSelectedCategory}
      setSelectedPriceRange={setSelectedPriceRange} />
      <Products
      selectedCategory={selectedCategory}
      selectedPriceRange={selectedPriceRange} />
    </div>
  );
}

export default MainComponent;
