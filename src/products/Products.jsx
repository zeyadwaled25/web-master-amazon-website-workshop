import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data.filter(product => product.id !== 5));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);
  console.log(products)

  return (
      <div className="products row row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} className="img-fluid" />
            <div className="details p-2">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Products;