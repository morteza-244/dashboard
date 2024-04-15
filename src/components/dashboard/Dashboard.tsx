import useGetCabins from "@/hooks/useGetCabins";
import useRecentBooking from "@/hooks/useRecentBooking";
import useRecentStays from "@/hooks/useRecentStays";
import LastDaySelector from "./LastDaySelector";
import SalesChart from "./SalesChart";
import StatisticsSkeleton from "./StatisticsSkeleton";
import StatItems from "./StatItems";
import StatsDrawer from "./StatsDrawer";

const Dashboard = () => {
  const { recentBooking, recentBookingLoading, recentBookingError } =
    useRecentBooking();
  const { confirmedStays, numOfDays, staysLoading, staysError } =
    useRecentStays();
  const { data: cabins, isLoading, error } = useGetCabins();

  const numOfBookings = recentBooking?.length;
  const numOfCabins = cabins?.length;
  const numOfCheckIns = confirmedStays?.length;
  const sales = recentBooking?.reduce(
    (acc, booking) => acc + booking.totalPrice!,
    0
  );
  const occupation = confirmedStays?.reduce(
    (acc, stay) => acc + stay.numNights!,
    0
  );
  const occupationPercent = occupation! / (numOfDays * numOfCabins!);
  const loading = recentBookingLoading || staysLoading || isLoading;
  const resError = recentBookingError || staysError || error;
  
  if (resError) return <p>مشکلی رخ داده است</p>;

  return (
    <div className="space-y-5">
      <h3 className="text-3xl">خانه</h3>
      <div className="flex justify-end gap-2 sm:gap-0">
        <LastDaySelector />
        <StatsDrawer>
          {loading ? (
            <StatisticsSkeleton />
          ) : (
            <StatItems
              numOfBookings={numOfBookings!}
              sales={sales!}
              numOfCheckIns={numOfCheckIns!}
              occupationPercent={occupationPercent}
            />
          )}
        </StatsDrawer>
      </div>
      <div className="hidden sm:flex justify-center lg:justify-evenly flex-wrap gap-y-4 gap-x-3">
        {loading ? (
          <StatisticsSkeleton />
        ) : (
          <StatItems
            numOfBookings={numOfBookings!}
            sales={sales!}
            numOfCheckIns={numOfCheckIns!}
            occupationPercent={occupationPercent}
          />
        )}
      </div>
      <div className="space-y-3">
        <h4 className="text-xl">نمودار فروش</h4>
        <SalesChart bookings={recentBooking!!} numOfDays={numOfDays} />
      </div>
    </div>
  );
};

export default Dashboard;
