import { getStaysAfterDate } from "@/services/apiBookings";
import useBookingStore from "@/store/bookingStore";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns-jalali";

const useRecentStays = () => {
  const lastDay = useBookingStore((s) => s.bookingQuery.lastDay);
  const numOfDays = Number(lastDay);
  const queryDate = subDays(new Date(), numOfDays).toISOString();

  const {
    data: stays,
    isLoading: staysLoading,
    error: staysError,
  } = useQuery({
    queryKey: ["stays", `last-${lastDay}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  return { stays, staysError, staysLoading, numOfDays };
};

export default useRecentStays;
