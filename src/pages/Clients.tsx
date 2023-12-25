import ClientsTable from "../components/ClientsTable";
import { getRoles } from "../lib/auth/Roles";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "../data/Clietns";
import ClientProfile from "../components/ClientProfile";

function Clients() {
  const idAdmin = getRoles();
  const queryClients = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });
  if (queryClients.isLoading) return <div>Loading...</div>;
  if (queryClients.isError) return <div>Error</div>;

  return (
    <section className="flex flex-col items-start justify-star p-10 gap-4">
      <h1 className="text-2xl font-bold">
        {idAdmin ? "Clients" : "My profile"}
      </h1>
      <div className="w-full">
        {idAdmin ? (
          <ClientsTable clients={queryClients.data} />
        ) : (
          <ClientProfile />
        )}
      </div>
    </section>
  );
}

export default Clients;
