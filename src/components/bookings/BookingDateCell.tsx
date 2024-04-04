import { formatDistanceFromNow } from "@/lib/utils";
import { differenceInDays, format, isToday } from "date-fns-jalali";
import { MoveLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface BookingDateCellProps {
  startDate: string;
  endDate: string;
}

const BookingDateCell = ({ endDate, startDate }: BookingDateCellProps) => {
  const bookingStartDay = format(startDate, "yyyy MM dd");
  const bookingEndDay = format(endDate, "yyyy MM dd");
  const daysDifference = differenceInDays(bookingEndDay, bookingStartDay);
  
  return (
    <div className="space-y-2">
      <p className="flex items-center">
        {isToday(new Date(startDate))
          ? "امروز"
          : formatDistanceFromNow(startDate)}
        <MoveLeft size={15} className="mx-2" /> {daysDifference} شب اقامت
      </p>
      <div className="flex gap-1 items-center">
        <p>{format(startDate, "d MMMM yyyy")}</p>
        <Separator
          orientation="horizontal"
          className="w-3 dark:bg-slate-400 bg-slate-600"
        />
        <p>{format(endDate, "d MMMM yyyy")}</p>
      </div>
    </div>
  );
};

export default BookingDateCell;
