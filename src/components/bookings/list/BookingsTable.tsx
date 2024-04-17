import { EmptyResource } from "@/components/shared";
import PaginateButton from "@/components/shared/PaginateButton";
import { Table, TableBody, TableHeader } from "@/components/ui/table";
import useBookings from "@/hooks/useBookings";
import BookingRow from "./BookingRow";
import BookingsTableSkeleton from "./BookingsTableSkeleton";
import BookingTableHeader from "./BookingTableHeader";

const BookingsTable = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data: bookings, isLoading, isPlaceholderData } = useBookings();
  if (bookings?.data.length === 0)
    return <EmptyResource resourceName="رزروی" />;
  return (
    <>
      <Table className="table-auto ">
        <TableHeader>
          <BookingTableHeader />
        </TableHeader>
        <TableBody>
          {isLoading &&
            skeletons.map((skeleton) => (
              <BookingsTableSkeleton key={skeleton} />
            ))}
          {bookings?.data.map((booking) => (
            <BookingRow
              key={booking.id}
              booking={booking}
              cabin={booking.cabins!}
              guestsInfo={booking.guests!}
            />
          ))}
        </TableBody>
      </Table>
      <PaginateButton
        itemCount={bookings?.count!}
        hasMore={bookings?.count!}
        isPlaceholderData={isPlaceholderData}
      />
    </>
  );
};

export default BookingsTable;
