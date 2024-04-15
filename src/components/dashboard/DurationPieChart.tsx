import { useTheme } from "@/components/ThemeProvider";
import { startDataDark, startDataLight } from "@/data";
import { prepareData } from "@/lib/utils";
import { TBooking } from "@/types";
import { ReactNode } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface DurationPieChartProps {
  confirmedStays: TBooking[];
  children?: ReactNode;
}

const DurationPieChart = ({
  confirmedStays,
  children,
}: DurationPieChartProps) => {
  const { theme } = useTheme();
  const startData = theme === "dark" ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);

  const toolTipStyle = {
    borderRadius: "5px",
    background: theme === "dark" ? "#334155" : "#e2e8f0",
    border: "0px",
    fontSize: "13px",
    padding: "4px",
  };

  return (
    <div className="p-4 space-y-3 sm:shadow-md shadow-md bg-slate-100 dark:bg-gray-900 rounded-lg">
      <h4 className="text-center sm:text-right">نمودار مدت زمان اقامت</h4>
      <ResponsiveContainer width="100%" height={210}>
        <PieChart className="p-5">
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={3}
            className="border"
            minAngle={15}
          >
            {data?.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip contentStyle={toolTipStyle} />
          {children}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DurationPieChart;
