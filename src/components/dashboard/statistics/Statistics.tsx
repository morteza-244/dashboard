import LastDaySelector from "./LastDaySelector";
import StatisticsSkeleton from "./StatisticsSkeleton";
import StatItems from "./StatItems";
import StatsDrawer from "./StatsDrawer";

interface StatisticsProps {
  statsLoading: boolean;
  numOfBookings?: number;
  sales?: number;
  numOfCheckIns?: number;
  occupationPercent: number;
}

const Statistics = ({
  occupationPercent,
  statsLoading,
  numOfBookings,
  numOfCheckIns,
  sales,
}: StatisticsProps) => {
  return (
    <>
      <div className="flex justify-end gap-2 sm:gap-0">
        <LastDaySelector />
        <StatsDrawer>
          {statsLoading ? (
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
        {statsLoading ? (
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
    </>
  );
};

export default Statistics;
