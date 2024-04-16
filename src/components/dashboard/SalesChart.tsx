import { TRecentBooking } from "@/types";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns-jalali";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@/components/ThemeProvider";

interface SalesChartProps {
  numOfDays: number;
  bookings: TRecentBooking[];
}

const SalesChart = ({ numOfDays, bookings }: SalesChartProps) => {
  const { theme } = useTheme();
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numOfDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    const total = bookings
      ?.filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.totalPrice!, 0);

    const extras = bookings
      ?.filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.extrasPrice!, 0);
    return {
      label: format(date, "MMMM dd"),
      totalSales: total,
      extrasSales: extras,
    };
  });

  const colors =
    theme === "dark"
      ? {
          totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
          extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
          text: "#e5e7eb",
          background: "#18212f",
        }
      : {
          totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
          extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
          text: "#374151",
          background: "#fff",
        };

  return (
    <div style={{ direction: "ltr" }} className="overflow-x-auto dark:bg-gray-900 rounded-lg p-2 sm:p-4">
      <ResponsiveContainer height={300} width={"100%"}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 40,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey={"label"}
            tick={{ fill: colors.text }}
            tickLine={{ fill: colors.text }}
            className="text-[12px] hidden sm:block"
          />
          <YAxis
            unit={"تومان"}
            className="text-[10px] sm:text-[12px] sm:block"
          />
          <CartesianGrid strokeDasharray={"4 4"} />
          <Tooltip
            contentStyle={{
              background: colors.background,
              borderRadius: "5px",
              border: 0,
            }}
            labelClassName="text-sm sm:text-[16px] dir-rtl"
            wrapperClassName="text-sm sm:text-[16px] dir-rtl"
          />
          <Area
            dataKey={"totalSales"}
            type={"monotone"}
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="جمع پرداختی"
          />
          <Area
            dataKey={"extrasSales"}
            type={"monotone"}
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="فروش اضافی"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
