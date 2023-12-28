import { Table } from "flowbite-react";
import { getUserId } from "../lib/auth/Roles";
import { useQuery } from "@tanstack/react-query";
import { getMySales } from "../data/Sales";
import { Sale } from "../lib/Types";

function MySalesTable() {
  const clientId = getUserId() as string;
  const queryMySales = useQuery({
    queryKey: ["mySales", clientId],
    queryFn: () => getMySales(clientId),
    refetchInterval: 5000,
  });
  const sales: Sale[] = (queryMySales.data as Sale[]) || [];
  console.log(sales);
  return (
    <div className="overflow-x-auto">
      <Table className="w-full h-full">
        <Table.Head>
          <Table.HeadCell>Sale Id</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {sales.map((sale) => (
            <Table.Row
              key={sale.saleId}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="font-semibold">{sale.saleId}</Table.Cell>
              <Table.Cell>{sale.saleDate}</Table.Cell>
              <Table.Cell className="font-semibold">
                {sale.product.productName}
              </Table.Cell>
              <Table.Cell className="font-semibold">
                {sale.product.productPrice}
              </Table.Cell>
              <Table.Cell
                className={`font-semibold ${
                  sale.status === "pending"
                    ? "text-yellow-400"
                    : sale.status === '{"status":"Invalidated"}'
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {sale.status === '{"status":"Validated"}'
                  ? "Validated"
                  : sale.status === '{"status":"Invalidated"}'
                  ? "Invalidated"
                  : "pending"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default MySalesTable;
