import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const StatusSelector = () => {
  const status = [
    { value: "all", label: "تمامی رزرو ها" },
    { value: "unconfirmed", label: "پرداخت نشده" },
    { value: "check_in", label: "در حال پرداخت" },
    { value: "checkout", label: "پرداخت شده" },
  ];
  return (
    <Select>
      <SelectTrigger className="w-[180px] flex-row-reverse">
        <SelectValue placeholder="وضعیت رزرو ها" />
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
