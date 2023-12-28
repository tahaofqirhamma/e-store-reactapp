import ClientsTable from "../components/ClientsTable";
import { getRoles } from "../lib/auth/Roles";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "../data/Clietns";
import ClientProfile from "../components/ClientProfile";
import { Spinner } from "flowbite-react";
import { Client } from "../lib/Types";

function Clients() {
  const idAdmin = getRoles();
  const queryClients = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });
  if (queryClients.isLoading) {
    <div className="flex flex-col justify-center items-center h-screen">
      <Spinner aria-label="Extra large spinner example" size="xl" />
      <p>Loading Data...</p>
    </div>;
  }

  if (queryClients.isError) {
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
    <section className="flex flex-col items-start justify-star p-10 gap-4">
      <h1 className="text-2xl font-bold">
        {idAdmin == true ? "Clients" : "My profile"}
      </h1>
      <div className="w-full">
        {idAdmin ? (
          <ClientsTable clients={(queryClients.data as Client[]) || []} />
        ) : (
          <ClientProfile />
        )}
      </div>
    </section>
  );
}

export default Clients;
