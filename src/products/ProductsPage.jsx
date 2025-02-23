import FilterNavbar from "./FilterNavbar";
import Products from "./Products";
import './productsPage.css'

function ProductsPage() {
  return (
    <div className="product-page">
      <FilterNavbar />
      <Products />
    </div>
  );
}
export default ProductsPage;