import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useBookingStore from "@/store/bookingStore";

const BookingSortSelector = () => {
  const sortValue = useBookingStore((s) => s.bookingQuery.order);
  const setSortValue = useBookingStore((s) => s.setSortValue);
  const orders: { value: string; label: string }[] = [
    { value: "startDate", label: "تاریخ" },
    { value: "totalPrice", label: "قیمت" },
  ];
  const currentValue = orders.find((order) => order.value === sortValue)?.label;
  return (
    <Select
      onValueChange={(value) => {
        setSortValue(value);
      }}
    >
      <div className="flex items-center gap-3">
        <span>مرتب سازی</span>
        <SelectTrigger className="w-48 flex-row-reverse bg-slate-50 dark:bg-inherit">
          <SelectValue
            placeholder={currentValue || "یک گزینه را انتخاب کنید"}
          />
        </SelectTrigger>
      </div>
      <SelectContent>
        <SelectGroup className="justify-end">
          {orders.map((order) => (
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

export default BookingSortSelector;
