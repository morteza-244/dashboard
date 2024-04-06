import { getBookings } from "@/services/apiBookings";
import useBookingStore from "@/store/bookingStore";
import { useQuery } from "@tanstack/react-query";

const useBookings = () => {
  const bookingQuery = useBookingStore((s) => s.bookingQuery);
  return useQuery({
    queryKey: ["bookings", bookingQuery],
    queryFn: () => getBookings(bookingQuery),
  });
};

export default useBookings;
