import { getCabin } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";

const useGetCabin = (cabinId: number) => {
  return useQuery({
    queryKey: ["cabin-detail", cabinId],
    queryFn: () => getCabin(cabinId),
  });
};

export default useGetCabin;
