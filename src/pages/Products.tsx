import ProductsTable from "../components/ProductsTable";
import { useEffect, useState } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:8888/PRODUCT-SERVICE/api/v1/products"
      );
      const result = await response.json();
      setProducts(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col items-start justify-star p-10 gap-10">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="w-full">
        <ProductsTable products={products} />
      </div>
    </section>
  );
}

export default Products;
