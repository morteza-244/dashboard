import { createCabin } from "@/services/apiCabins";
import { TCabinFormData } from "@/validations/cabinsValidation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { toast } from "sonner";

interface Props {
    resetFileUrl: (value: string) => void;
  reset: UseFormReset<TCabinFormData>;
}

const useCreateCabin = ({ reset, resetFileUrl }: Props) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Your cabin has been created successfully");
      resetFileUrl("");
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCreateCabin;
