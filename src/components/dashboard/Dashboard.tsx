import useGetCabins from "@/hooks/useGetCabins";
import useRecentBooking from "@/hooks/useRecentBooking";
import useRecentStays from "@/hooks/useRecentStays";
import { TodayBookingCarousel } from "./bookingCarousel";
import { DurationChart } from "./durationChart";
import { SalesChartContainer } from "./salesChart";
import { Statistics } from "./statistics";

const Dashboard = () => {
  const { recentBooking, recentBookingLoading, recentBookingError } =
    useRecentBooking();
  const { numOfDays, staysLoading, staysError, stays } = useRecentStays();
  const { data: cabins, isLoading, error } = useGetCabins();

  const confirmedStays = stays?.filter(
    (item) => item.status === "checked_in" || item.status === "checked_out"
  );

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
    <div className="space-y-10 px-5">
      <h3 className="text-3xl">خانه</h3>
      <Statistics
        occupationPercent={occupationPercent}
        statsLoading={loading}
        numOfBookings={numOfBookings}
        numOfCheckIns={numOfCheckIns}
        sales={sales}
      />
      <div className="space-y-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DurationChart stays={confirmedStays!} staysLoading={staysLoading} />
          <TodayBookingCarousel />
        </div>
        <SalesChartContainer
          loading={loading}
          numOfDays={numOfDays}
          recentBooking={recentBooking!}
        />
      </div>
    </div>
  );
};

export default Dashboard;
