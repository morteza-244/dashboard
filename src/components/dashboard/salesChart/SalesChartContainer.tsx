import { TRecentBooking } from "@/types";
import SalesChart from "./SalesChart";
import SalesChartSkeleton from "./SalesChartSkeleton";

interface SalesChartContainerProps {
  loading: boolean;
  recentBooking: TRecentBooking[];
  numOfDays: number;
}

const SalesChartContainer = ({
  recentBooking,
  loading,
  numOfDays,
}: SalesChartContainerProps) => {
  return (
    <>
      <h4 className="text-xl">نمودار فروش</h4>
      {loading ? (
        <SalesChartSkeleton />
      ) : (
        <SalesChart bookings={recentBooking} numOfDays={numOfDays} />
      )}
    </>
  );
};

export default SalesChartContainer;
