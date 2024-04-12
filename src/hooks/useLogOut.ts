import { logOut } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth/login", { replace: true });
    },
  });
};

export default useLogOut;
