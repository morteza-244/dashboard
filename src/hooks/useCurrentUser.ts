import { getCurrentUser } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

const useCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
};

export default useCurrentUser;
