import { useEffect, useState } from "react";
import ClientsTable from "../components/ClientsTable";

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:8888/CLIENT-SERVICE/api/v1/clients"
      );
      const result = await response.json();
      setClients(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col items-start justify-star p-10 gap-4">
      <h1 className="text-2xl font-bold">Clients</h1>
      <div className="w-full">
        <ClientsTable clients={clients} />
      </div>
    </section>
  );
}

export default Clients;
