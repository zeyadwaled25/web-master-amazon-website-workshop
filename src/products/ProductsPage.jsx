import { useState } from "react";
import FilterNavbar from "./FilterNavbar";
import Products from "./Products";
import './productsPage.css'

import Footer from "../Components/constant/Footer/Footer";
import Navbar from '../Components/constant/Navbar/Navbar';
function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");


  return (
    <>
      <Navbar/>
      <div className="product-page">
      <FilterNavbar
        setSpecialCategory={setSelectedCategory}
        setSelectedPriceRange={setSelectedPriceRange}
      />
      <Products
        selectedCategory={selectedCategory}
        selectedPriceRange={selectedPriceRange}
      />
      </div>
      <Footer/>
    </>
  );
}

export default MainComponent;
