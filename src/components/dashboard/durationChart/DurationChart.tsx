import { TTodayBooking } from "@/types";
import { Legend } from "recharts";
import DurationPieChart from "./DurationPieChart";
import PieChartSkeleton from "./PieChartSkeleton";

interface DurationChartProps {
  stays: TTodayBooking[];
  staysLoading: boolean;
}

const DurationChart = ({ stays, staysLoading }: DurationChartProps) => {
  return (
    <>
      <div className="hidden sm:block pie-chart">
        <h4 className="text-center sm:text-right">نمودار مدت زمان اقامت</h4>
        {staysLoading ? (
          <PieChartSkeleton />
        ) : (
          <DurationPieChart confirmedStays={stays}>
            <Legend
              verticalAlign="middle"
              width={130}
              align="right"
              iconType="circle"
              iconSize={10}
            />
          </DurationPieChart>
        )}
      </div>
      <div className="block sm:hidden pie-chart">
        {staysLoading ? (
          <PieChartSkeleton />
        ) : (
          <DurationPieChart confirmedStays={stays} />
        )}
      </div>
    </>
  );
};

export default DurationChart;
