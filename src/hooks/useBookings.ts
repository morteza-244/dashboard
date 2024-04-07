import { getBookings } from "@/services/apiBookings";
import useBookingStore from "@/store/bookingStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const useBookings = () => {
  const [searchParams] = useSearchParams();
  const bookingQuery = useBookingStore((s) => s.bookingQuery);
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  return useQuery({
    queryKey: ["bookings", bookingQuery, page],
    queryFn: () => getBookings(bookingQuery, page),
    placeholderData: keepPreviousData,
  });
};

export default useBookings;
