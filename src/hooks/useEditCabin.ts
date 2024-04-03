import { updateCabin } from "@/services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useEditCabin = (id: number ) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cabin-detail", id],
      });
      toast.success("Your cabin has been created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useEditCabin;
