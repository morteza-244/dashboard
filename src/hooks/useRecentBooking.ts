import { getBookingAfterDate } from "@/services/apiBookings";
import useBookingStore from "@/store/bookingStore";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns-jalali";

const useRecentBooking = () => {
  const lastDay = useBookingStore((s) => s.bookingQuery.lastDay);
  const numOfDays = Number(lastDay);
  const queryDate = subDays(new Date(), numOfDays).toISOString();

  const { data: recentBooking, isLoading: recentBookingLoading } = useQuery({
    queryKey: ["bookings", `last-${numOfDays}`],
    queryFn: () => getBookingAfterDate(queryDate),
  });
  return { recentBooking, recentBookingLoading };
};

export default useRecentBooking;
