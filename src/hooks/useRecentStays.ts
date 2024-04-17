import { getStaysAfterDate } from "@/services/apiBookings";
import useBookingStore from "@/store/bookingStore";
import { useQuery } from "@tanstack/react-query";

const useRecentStays = () => {
  const lastDay = useBookingStore((s) => s.bookingQuery.lastDay);
  const numOfDays = Number(lastDay);

  const {
    data: stays,
    isLoading: staysLoading,
    error: staysError,
  } = useQuery({
    queryKey: ["stays", `last-${lastDay}`],
    queryFn: () => getStaysAfterDate(),
  });

  return { stays, staysError, staysLoading, numOfDays };
};

export default useRecentStays;
