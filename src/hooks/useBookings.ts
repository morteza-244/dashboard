import { getBookings } from "@/services/apiBookings";
import { useQuery } from "@tanstack/react-query";

const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
};

export default useBookings;
