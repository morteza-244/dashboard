import { BookingStatusBadge } from "@/components/shared";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  TBooking,
  TBookingCabin,
  TBookingGuests,
  TStatus
} from "@/types";
import BookingDateCell from "./BookingDateCell";

interface BookingRowProps {
  guestsInfo: TBookingGuests;
  cabin: TBookingCabin;
  booking: TBooking;
}

const BookingRow = ({ booking, cabin, guestsInfo }: BookingRowProps) => {
  return (
    <TableRow className="whitespace-nowrap">
      <TableCell className="space-y-2 lg:space-y-0">
        <p>{cabin.name}</p>
        <div className="lg:hidden">
          <BookingStatusBadge statusValue={booking.status! as TStatus} />
        </div>
      </TableCell>
      <TableCell className="space-y-2 hidden lg:table-cell">
        <p>{guestsInfo.fullName}</p>
        <p className="text-xs dark:text-slate-300">{guestsInfo.email}</p>
      </TableCell>
      <TableCell>
        <BookingDateCell
          endDate={booking.endDate!}
          startDate={booking.startDate!}
        />
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <BookingStatusBadge statusValue={booking.status! as TStatus} />
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        {booking.totalPrice}
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
