import { useEffect, useState } from "react";
import SalesTable from "../components/SalesTable";

function Sales() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetchSales();
  }, []);
  const fetchSales = async () => {
    try {
      const response = await fetch(
        "http://localhost:8888/SALES-SERVICE/api/v1/sales"
      );
      const result = await response.json();
      setSales(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <section className="flex flex-col items-start p-10 gap-10">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="w-full">
        <SalesTable sales={sales} />
      </div>
    </section>
  );
}

export default Sales;
