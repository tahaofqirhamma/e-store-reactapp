import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaPen } from "react-icons/fa6";
import { updateProduct } from "../data/products";
interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  isInStock: boolean;
}

export const UpdateProductModel = ({ product }: { product: Product }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>(product.productName);
  const [productPrice, setProductPrice] = useState<number>(
    Number(product.productPrice)
  );
  const [quantity, setQuantity] = useState<number>(Number(product.quantity));
  const queryClient = useQueryClient();

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const updateProductMutation = useMutation({
    mutationFn: (product: Product) => updateProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const updateProductHandler = (product: Product) => {
    updateProductMutation.mutate(product);
    setOpenModal(false);
  };

  return (
    <>
      <button
        className="bg-transparent hover:bg-white"
        onClick={() => setOpenModal(true)}
      >
        <IconContext.Provider value={{ color: "#155e75", size: "20" }}>
          <FaPen />
        </IconContext.Provider>
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Update Product
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="productName" value="Product name" />
              </div>
              <TextInput
                id="productName"
                placeholder="xyz"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Price" value="Product Price" />
              </div>
              <TextInput
                id="Price"
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="quantity" value="Product quantity" />
              </div>
              <TextInput
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </div>

            <div className="w-full">
              <Button
                onClick={() =>
                  updateProductHandler({
                    productId: product.productId,
                    productName: productName,
                    productPrice: productPrice,
                    quantity: quantity,
                    isInStock: quantity > 0 ? true : false,
                  })
                }
              >
                Update Product
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
