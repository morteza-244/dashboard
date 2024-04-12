import { signUp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: () => {
      toast.error("مشکلی بوجود آمده, لطفا دوباره امتحان کنید");
    },
  });
};

export default useSignUp;
