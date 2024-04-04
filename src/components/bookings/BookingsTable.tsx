import useBookings from "@/hooks/useBookings";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import BookingRow from "./BookingRow";

const BookingsTable = () => {
  const { data: bookings } = useBookings();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>اقامتگاه</TableHead>
          <TableHead className="hidden lg:table-cell">مهمان</TableHead>
          <TableHead>تاریخ</TableHead>
          <TableHead className="hidden lg:table-cell">وضعیت</TableHead>
          <TableHead className="hidden lg:table-cell">پرداختی ها</TableHead>
          <TableHead className="text-left"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings?.map((booking) => (
          <BookingRow
            booking={booking}
            cabin={booking.cabins!}
            guestsInfo={booking.guests!}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default BookingsTable;