import SalesTable from "../components/SalesTable";
import { useQuery } from "@tanstack/react-query";
import { getSales } from "../data/Sales";

function Sales() {
  const querySales = useQuery({
    queryKey: ["sales"],
    queryFn: getSales,
  });

  if (querySales.isLoading) return <div>Loading...</div>;
  if (querySales.isError) return <div>Error</div>;
  return (
    <section className="flex flex-col items-start p-10 gap-10">
      <h1 className="text-2xl font-bold">Sales</h1>
      <div className="w-full">
        <SalesTable sales={querySales.data} />
      </div>
    </section>
  );
}

export default Sales;
