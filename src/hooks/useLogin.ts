import { loginApi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("شما با موفقیت وارد حساب خود شدید");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useLogin;
