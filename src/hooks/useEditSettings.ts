import { updateSettings } from "@/services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useEditSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("تنظیمات برنامه شما با موفقیت به روز شد");
    },
    onError: () => {
      toast.error("مشکلی به وجود امده است, لطفا دوباره امتحان کنید");
    },
  });
};

export default useEditSettings;
