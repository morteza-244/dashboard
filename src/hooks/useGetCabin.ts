import { getCabin } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";

const useGetCabin = (cabinId: number) => {
  return useQuery({
    queryKey: ["cabin-detail"],
    queryFn: () => getCabin(cabinId),
  });
};

export default useGetCabin;
