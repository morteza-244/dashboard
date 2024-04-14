import useRecentBooking from "@/hooks/useRecentBooking";
import LastDaySelector from "./LastDaySelector";
import StatItems from "./StatItems";
import StatsDrawer from "./StatsDrawer";
import useRecentStays from "@/hooks/useRecentStays";
import useGetCabins from "@/hooks/useGetCabins";

const Dashboard = () => {
  const { recentBooking } = useRecentBooking();
  const { confirmedStays, numOfDays } = useRecentStays();
  const { data: cabins } = useGetCabins();

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

  return (
    <div className="space-y-5">
      <h3 className="text-3xl">خانه</h3>
      <div className="flex justify-end gap-2 sm:gap-0">
        <LastDaySelector />
        <StatsDrawer>
          <StatItems
            numOfBookings={numOfBookings!}
            sales={sales!}
            numOfCheckIns={numOfCheckIns!}
            occupationPercent={occupationPercent}
          />
        </StatsDrawer>
      </div>
      <div className="hidden sm:flex justify-center lg:justify-evenly flex-wrap gap-y-4 gap-x-3">
        <StatItems
          numOfBookings={numOfBookings!}
          sales={sales!}
          numOfCheckIns={numOfCheckIns!}
          occupationPercent={occupationPercent}
        />
      </div>
    </div>
  );
};

export default Dashboard;
