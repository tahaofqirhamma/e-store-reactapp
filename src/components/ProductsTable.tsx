import { Table, TableRow } from "flowbite-react";
import { LuTrash } from "react-icons/lu";
import { AddProductModel } from "./AddProductModel";
import { IconContext } from "react-icons";
import { UpdateProductModel } from "./UpdateProductModel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getRoles, getUserId } from "../lib/auth/Roles";
import { addSale } from "../data/Sales";
import { SaleRequest } from "../lib/Types";
import { deleteProduct } from "../data/products";
interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  isInStock: boolean;
}
function ProductsTable({ products }: { products: Product[] }) {
  const isAdmin = getRoles();
  const queryClient = useQueryClient();
  const clientId = getUserId() as string;

  const deleteProductMutation = useMutation({
    mutationFn: (productId: number) => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const deleteProductHandler = (productId: number) => {
    deleteProductMutation.mutate(productId);
  };

  const addSaleMutation = useMutation({
    mutationFn: (sale: SaleRequest) => addSale(sale),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales"] });
    },
  });
  const addSaleHandler = (sale: SaleRequest) => {
    addSaleMutation.mutate(sale);
  };

  return (
    <div className="overflow-x-auto flex flex-col gap-4">
      {isAdmin && <AddProductModel />}
      <Table className="w-full">
        <Table.Head>
          <Table.HeadCell>Product Id</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>price</Table.HeadCell>
          <Table.HeadCell>availability</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
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
              <Table.Cell>{product.productPrice} MAD</Table.Cell>
              <Table.Cell
                className={`text-lg ${
                  product.isInStock
                    ? "text-[#155e75] font-semibold"
                    : "text-red-500 font-semibold"
                }`}
              >
                {product.isInStock ? "Available" : "Not available"}
              </Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
              {isAdmin ? (
                <Table.Cell>
                  <div className="flex flex-row gap-4">
                    <button
                      onClick={() => deleteProductHandler(product.productId)}
                    >
                      <IconContext.Provider
                        value={{ color: "red", size: "20" }}
                      >
                        <LuTrash />
                      </IconContext.Provider>
                    </button>
                    <button>
                      <UpdateProductModel product={product} />
                    </button>
                  </div>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <button
                    className="bg-[#155e75] py-2 px-4 text-white font-semibold rounded-md"
                    onClick={() =>
                      addSaleHandler({
                        productId: product.productId,
                        clientId: clientId,
                        quantity: 1,
                        saleDate: new Date(),
                      })
                    }
                  >
                    Buy it
                  </button>
                </Table.Cell>
              )}
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProductsTable;
