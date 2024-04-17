import { createCabin } from "@/services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useCreateCabin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("اقامتگاه شما با موفقیت ایجاد شد");
    },
    onError: () => {
      toast.error("مشکلی به وجود امده است, لطفا دوباره امتحان کنید");
    },
  });
};

export default useCreateCabin;
