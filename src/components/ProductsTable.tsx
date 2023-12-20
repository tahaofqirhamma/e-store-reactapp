import { Table, TableRow } from "flowbite-react";
function ProductsTable({ products }) {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head>
          <Table.HeadCell>Product Id</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>availability</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => (
            <TableRow
              key={product.productId}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{product.productId}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.productName}
              </Table.Cell>
              <Table.Cell>{product.productPrice}</Table.Cell>
              <Table.Cell>
                {product.isInStock ? "Available" : "Not available"}
              </Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProductsTable;
