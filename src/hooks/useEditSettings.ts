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
      toast.success("Your application settings have been updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useEditSettings;
