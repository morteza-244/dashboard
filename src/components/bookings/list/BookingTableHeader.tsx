import { TableHead, TableRow } from "@/components/ui/table";

const BookingTableHeader = () => {
  return (
    <TableRow>
      <TableHead>اقامتگاه</TableHead>
      <TableHead>مهمان</TableHead>
      <TableHead className="large-cell">تاریخ</TableHead>
      <TableHead className="smallTable-cell">وضعیت</TableHead>
      <TableHead className="large-cell">پرداختی ها</TableHead>
      <TableHead className="text-left"></TableHead>
    </TableRow>
  );
};

export default BookingTableHeader;
