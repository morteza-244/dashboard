import { TBookingStatus } from "@/types";

interface BookingStatusBadgeProps {
  statusValue: TBookingStatus;
}

const BookingStatusBadge = ({ statusValue }: BookingStatusBadgeProps) => {
  const status: Record<TBookingStatus, { label: string; color: string }> = {
    CHECKED_IN: { label: "CHECKED_IN", color: "text-emerald-400" },
    CHECKED_OUT: { label: "CHECKED_OUT", color: "text-gray-400" },
    UNCONFIRMED: { label: "UNCONFIRMED", color: "text-blue-500" },
  };

  return (
    <span className={status[statusValue].color}>
      {status[statusValue].label}
    </span>
  );
};

export default BookingStatusBadge;
