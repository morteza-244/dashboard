import {
  BarChart4,
  CalendarCheck,
  CalendarCheck2,
  CircleDollarSign,
} from "lucide-react";
import Stat from "./Stat";
import { formatCurrency } from "@/lib/utils";

interface StatItemsProps {
  sales: number;
  numOfBookings: number;
  numOfCheckIns: number;
  occupationPercent: number;
}

const StatItems = ({ numOfBookings, sales, numOfCheckIns, occupationPercent }: StatItemsProps) => {
  return (
    <>
      <Stat
        color="booking-stats"
        icon={<CalendarCheck size={25} />}
        title={"رزرو ها"}
        value={numOfBookings}
      />
      <Stat
        color="money-stats"
        icon={<CircleDollarSign size={25} />}
        title={"فروش"}
        value={formatCurrency(sales)}
      />
      <Stat
        color="money-stats"
        icon={<CalendarCheck2 size={22} />}
        title={"رزرو های تایید شده"}
        value={numOfCheckIns}
      />
      <Stat
        color="occupancy-stats"
        icon={<BarChart4 size={22} />}
        title={"درصد فروش"}
        value={Math.round(occupationPercent * 100) + "%"}
      />
    </>
  );
};

export default StatItems;
