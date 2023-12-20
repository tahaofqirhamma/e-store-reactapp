import axios from "axios";
import { useEffect, useState } from "react";
const clientsURL = "http://localhost:8888/PRODUCT-SERVICE/api/v1/products";
interface Client {
  productId: number;
  productName: string;
  productPrice: number;
  isInStock: boolean;
  quantity: number;
}
export const App = () => {
  const [products, setProducts] = useState<Client[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getProducts();
    setLoading(false);
  }, []);
  const getProducts = async () => {
    axios.get(clientsURL).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="text-black text-xl">
      <h1 className="text-2xl font-bold">Clients</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        products?.map((product) => (
          <div key={product.productId}>
            <p>{product.productName}</p>
            <p>{product.productPrice}</p>
            <p>{product.isInStock}</p>
            <p>{product.quantity}</p>
          </div>
        ))
      )}
      <button onClick={() => getProducts()} className="bg-green-600 px-8 py-2">
        Get products
      </button>
    </div>
  );
};
