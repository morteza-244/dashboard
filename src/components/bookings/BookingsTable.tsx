import useBookings from "@/hooks/useBookings";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookingRow from "./BookingRow";
import BookingsTableSkeleton from "./BookingsTableSkeleton";
import { EmptyResource } from "@/components/shared";

const BookingsTable = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data: bookings, isLoading } = useBookings();
  if (bookings?.length === 0) return <EmptyResource resourceName="رزروی" />;
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
        {isLoading &&
          skeletons.map((skeleton) => <BookingsTableSkeleton key={skeleton} />)}
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
