import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";

const useGetCabins = () => {
  return useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
};

export default useGetCabins;
