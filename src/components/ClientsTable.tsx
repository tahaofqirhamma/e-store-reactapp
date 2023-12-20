import { Table, TableRow } from "flowbite-react";
function ClientsTable({ clients }) {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head>
          <Table.HeadCell>Client Id</Table.HeadCell>
          <Table.HeadCell>Full name</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {clients.map((client) => (
            <TableRow
              key={client.clientId}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {client.clientId}
              </Table.Cell>
              <Table.Cell>{client.fullName}</Table.Cell>

              <Table.Cell>{client.address}</Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ClientsTable;
