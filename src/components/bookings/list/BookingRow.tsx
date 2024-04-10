import { BookingStatusBadge } from "@/components/shared";
import { TableCell, TableRow } from "@/components/ui/table";
import { TBooking, TBookingCabin, TBookingGuests, TStatus } from "@/types";
import BookingDateCell from "./BookingDateCell";
import BookingDropdownMenuCell from "./BookingDropdownMenuCell";
import { formatCurrency } from "@/lib/utils";

interface BookingRowProps {
  guestsInfo: TBookingGuests;
  cabin: TBookingCabin;
  booking: TBooking;
}

const BookingRow = ({ booking, cabin, guestsInfo }: BookingRowProps) => {
  return (
    <TableRow>
      <TableCell>{cabin.name}</TableCell>
      <TableCell className="space-y-2">
        <p>{guestsInfo.fullName}</p>
        <p className="text-xs dark:text-slate-300">{guestsInfo.email}</p>
      </TableCell>
      <TableCell className="large-cell">
        <BookingDateCell
          endDate={booking.endDate!}
          startDate={booking.startDate!}
        />
      </TableCell>
      <TableCell className="smallTable-cell">
        <BookingStatusBadge statusValue={booking.status! as TStatus} />
      </TableCell>
      <TableCell className="large-cell">
        {formatCurrency(booking.totalPrice!)}
      </TableCell>
      <TableCell className="text-left">
        <BookingDropdownMenuCell
          bookingId={booking.id}
          bookingStatus={booking.status as TStatus}
        />
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
