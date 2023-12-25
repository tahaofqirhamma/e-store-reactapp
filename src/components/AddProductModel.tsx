import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { ProductRequest } from "../lib/Types";
import { useState } from "react";
import { addProduct } from "../data/products";

export const AddProductModel = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  function onCloseModal() {
    setOpenModal(false);
  }
  const queryClient = useQueryClient();

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const addProductMutation = useMutation({
    mutationFn: (product: ProductRequest) => addProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const addProductHandler = (product: ProductRequest) => {
    addProductMutation.mutate(product);
    setOpenModal(false);
  };

  return (
    <>
      <Button className="w-1/6" onClick={() => setOpenModal(true)}>
        Add product
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add new product
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="productName" value="Product name" />
              </div>
              <TextInput
                id="productName"
                placeholder="product x"
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
                placeholder="99.99"
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
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </div>

            <div className="w-full">
              <Button
                onClick={() =>
                  addProductHandler({
                    productName: productName,
                    productPrice: productPrice,
                    quantity: quantity,
                    isInStock: quantity > 0 ? true : false,
                  })
                }
              >
                add product
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
