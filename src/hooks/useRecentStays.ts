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
    error,
  } = useQuery({
    queryKey: ["stays", `last-${numOfDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, confirmedStays, error, staysLoading, numOfDays };
};

export default useRecentStays;
