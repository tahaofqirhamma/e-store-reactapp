import ProductsTable from "../components/ProductsTable";
import { getProducts } from "../data/products";
import { useQuery } from "@tanstack/react-query";
function Products() {
  const queryProducts = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (queryProducts.isLoading) return <div>Loading...</div>;
  if (queryProducts.isError) return <div>Error</div>;

  return (
    <section className="flex flex-col items-start justify-star p-10 gap-10">
      <h1 className="text-2xl font-bold text-[#155e75]">Products</h1>
      <div className="w-full">
        <ProductsTable products={queryProducts.data} />
      </div>
    </section>
  );
}

export default Products;
