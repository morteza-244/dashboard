import { BookingStatusBadge } from "@/components/shared";
import { TableCell, TableRow } from "@/components/ui/table";
import { TBooking, TBookingCabin, TBookingGuests, TStatus } from "@/types";
import BookingDateCell from "./BookingDateCell";
import BookingDropdownMenuCell from "./BookingDropdownMenuCell";

interface BookingRowProps {
  guestsInfo: TBookingGuests;
  cabin: TBookingCabin;
  booking: TBooking;
}

const BookingRow = ({ booking, cabin, guestsInfo }: BookingRowProps) => {
  return (
    <TableRow className="whitespace-nowrap">
      <TableCell>{cabin.name}</TableCell>
      <TableCell className="space-y-2">
        <p>{guestsInfo.fullName}</p>
        <p className="text-xs dark:text-slate-300">{guestsInfo.email}</p>
      </TableCell>
      <TableCell>
        <BookingDateCell
          endDate={booking.endDate!}
          startDate={booking.startDate!}
        />
      </TableCell>
      <TableCell>
        <BookingStatusBadge statusValue={booking.status! as TStatus} />
      </TableCell>
      <TableCell>{booking.totalPrice}</TableCell>
      <TableCell>
        <BookingDropdownMenuCell bookingId={booking.id} />
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
