import { useMutation, useQueryClient } from "@tanstack/react-query";
import { validateSale } from "../data/Sales";

export const SaleValidator = ({ saleId }: { saleId: number }) => {
  const queryClient = useQueryClient();
  const updateSaleStatusMutation = useMutation({
    mutationFn: (variables: { saleId: number; status: string }) =>
      validateSale(variables.saleId, variables.status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales"] });
    },
  });
  const validateSaleHandler = (saleId: number, status: string) => {
    updateSaleStatusMutation.mutate({ saleId, status });
  };

  return (
    <div className="flex flex-row gap-3">
      <button
        className="bg-[#155e75] px-4 py-2 rounded-md text-white font-medium"
        onClick={() => validateSaleHandler(saleId, "Validated")}
      >
        Validate
      </button>
      <button
        className="bg-red-600 px-4 py-2 rounded-md text-white font-medium"
        onClick={() => validateSaleHandler(saleId, "Invalidated")}
      >
        Invalidate
      </button>
    </div>
  );
};
