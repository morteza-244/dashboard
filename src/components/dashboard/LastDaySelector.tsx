import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useBookingStore from "@/store/bookingStore";

const LastDaySelector = () => {
  const lastDay = useBookingStore((s) => s.bookingQuery.lastDay);
  const setLastDay = useBookingStore((s) => s.setLastDay);
  const days = [
    { value: "7", label: "7 روز" },
    { value: "30", label: "30 روز گذشته" },
    { value: "90", label: "90 روز گذشته" },
  ];
  const currentDay = days.find((day) => day.value === lastDay)?.label;
  return (
    <Select onValueChange={(value) => setLastDay(value)}>
      <SelectTrigger className="w-[180px] dir-rtl">
        <SelectValue placeholder={currentDay} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {days.map((day) => (
            <SelectItem key={day.value} value={day.value} className="dir-rtl">
              {day.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LastDaySelector;
