import { Table } from "flowbite-react";
import { Sale } from "../lib/Types";
import { getRoles } from "../lib/auth/Roles";
import { SaleValidator } from "./SaleValidator";
function SalesTable({ sales }: { sales: Sale[] }) {
  const isAdmin = getRoles();

  return (
    <div className="overflow-x-auto">
      <Table className="w-full h-full">
        <Table.Head>
          <Table.HeadCell>Sale Id</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Client</Table.HeadCell>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          {isAdmin && <Table.HeadCell>Actions</Table.HeadCell>}
        </Table.Head>
        <Table.Body className="divide-y">
          {sales.map((sale) => (
            <Table.Row
              key={sale.saleId}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{sale.saleId}</Table.Cell>
              <Table.Cell>{sale.saleDate}</Table.Cell>
              <Table.Cell>{sale.client.fullName}</Table.Cell>
              <Table.Cell>{sale.product.productName}</Table.Cell>
              <Table.Cell>{sale.product.productPrice}</Table.Cell>
              <Table.Cell>{sale.status}</Table.Cell>
              {isAdmin && (
                <Table.Cell>
                  <SaleValidator saleId={sale.saleId} />
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default SalesTable;
