import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useBookingStore from "@/store/bookingStore";
import { useSearchParams } from "react-router-dom";

const StatusSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const bookingStatus = useBookingStore((s) => s.bookingQuery.status);
  const setStatus = useBookingStore((s) => s.setStatus);
  const status: { value: string; label: string }[] = [
    { value: "all", label: "تمامی رزرو ها" },
    { value: "unconfirmed", label: "پرداخت نشده" },
    { value: "checked_in", label: "در حال پرداخت" },
    { value: "checked_out", label: "پرداخت شده" },
  ];
  const currentValue = status.find(
    (item) => item.value === bookingStatus
  )?.label;

  return (
    <Select
      onValueChange={(value) => {
        if (searchParams.get("page")) {
          searchParams.set("page", "1");
          setSearchParams(searchParams);
        }

        setStatus(value);
      }}
    >
      <SelectTrigger className="w-[180px] flex-row-reverse bg-slate-50 dark:bg-inherit">
        <SelectValue placeholder={currentValue} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="justify-end">
          {status.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="justify-end"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusSelector;
