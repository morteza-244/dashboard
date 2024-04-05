import { getBookings } from "@/services/apiBookings";
import useBookingStore from "@/store/bookingStore";
import { useQuery } from "@tanstack/react-query";

const useBookings = () => {
  const bookingStatus = useBookingStore((s) => s.bookingStatus);
  return useQuery({
    queryKey: ["bookings", bookingStatus],
    queryFn: () => getBookings(bookingStatus),
  });
};

export default useBookings;
