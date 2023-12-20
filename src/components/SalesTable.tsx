import { Table } from "flowbite-react";
function SalesTable({ sales }) {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head>
          <Table.HeadCell>Sale Id</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Client</Table.HeadCell>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default SalesTable;
