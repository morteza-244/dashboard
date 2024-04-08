import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useBookingStore from "@/store/bookingStore";
const SortTypeSelector = () => {
  const sortType = useBookingStore((s) => s.bookingQuery.sortType);
  const setSortType = useBookingStore((s) => s.setSortType);
  const sortTypes = [
    { label: "صعودی", value: "asc", statusType: true },
    { label: "نزولی", value: "desc", statusType: false },
  ];
  const currentValue = sortTypes.find(
    (item) => item.statusType === sortType
  )?.label;

  return (
    <Select
      onValueChange={(value) => {
        const sortTypeValue =
          value === "asc" ? true : value === "desc" ? false : sortType;
        setSortType(sortTypeValue);
      }}
    >
      <div className="flex items-center gap-3">
        <SelectTrigger className="w-24 flex-row-reverse bg-slate-50 dark:bg-inherit">
          <SelectValue
            placeholder={currentValue || "یک گزینه را انتخاب کنید"}
          />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectGroup className="justify-end">
          {sortTypes.map((order) => (
            <SelectItem
              key={order.value}
              value={order.value}
              className="justify-end"
            >
              {order.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortTypeSelector;
