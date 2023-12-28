import SalesTable from "../components/SalesTable";
import { useQuery } from "@tanstack/react-query";
import { getSales } from "../data/Sales";
import { Spinner } from "flowbite-react";
import { Sale } from "../lib/Types";
import { getRoles } from "../lib/auth/Roles";
import MySalesTable from "../components/MySalesTable";

function Sales() {
  const isAdmin = getRoles();
  const querySales = useQuery({
    queryKey: ["sales"],
    queryFn: getSales,
  });

  if (querySales.isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Spinner aria-label="Extra large spinner example" size="xl" />
        <p>Loading Data...</p>
      </div>
    );
  }

  if (querySales.isError) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Spinner
          color="failure"
          aria-label="Warning spinner example"
          size="xl"
        />

        <p>Solving Errors...</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-start p-10 gap-10">
      <h1 className="text-2xl font-bold">Sales</h1>
      <div className="w-full">
        {isAdmin ? (
          <SalesTable sales={querySales.data as Sale[]} />
        ) : (
          <MySalesTable />
        )}
      </div>
    </section>
  );
}

export default Sales;
