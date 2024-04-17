import { useTheme } from "@/components/ThemeProvider";
import { startDataDark, startDataLight } from "@/data";
import { prepareData } from "@/lib/utils";
import { TTodayBooking } from "@/types";
import { ReactNode } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface DurationPieChartProps {
  confirmedStays: TTodayBooking[];
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
    <ResponsiveContainer width="100%" height={210}>
      <PieChart className="md:p-4">
        <Pie
          data={data}
          nameKey="duration"
          dataKey="value"
          innerRadius={80}
          outerRadius={100}
          paddingAngle={3}
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
  );
};

export default DurationPieChart;
