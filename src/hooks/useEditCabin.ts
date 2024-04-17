import { updateCabin } from "@/services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useEditCabin = (id: number) => {
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
      toast.success("اقامتگاه شما با موفقیت به روز شد");
    },
    onError: () => {
      toast.error("مشکلی به وجود امده است, لطفا دوباره امتحان کنید");
    },
  });
};

export default useEditCabin;
