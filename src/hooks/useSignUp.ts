import { signUp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("عملیات با موفقیت انجام شد. لطفا ایمیل خود را چک کنید");
    },
    onError: () => {
      toast.error("مشکلی بوجود آمده, لطفا چند دقیقه بعد امتحان کنید");
    },
  });
};

export default useSignUp;
