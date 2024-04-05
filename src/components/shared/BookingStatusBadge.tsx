import { TStatus } from "@/types";

interface BookingStatusBadgeProps {
  statusValue: TStatus;
}

const BookingStatusBadge = ({ statusValue }: BookingStatusBadgeProps) => {
  const status: Record<TStatus, { label: string; color: string }> = {
    checked_in: { label: "CHECKED_IN", color: "text-emerald-400" },
    checked_out: { label: "CHECKED_OUT", color: "text-gray-400" },
    unconfirmed: { label: "UNCONFIRMED", color: "text-blue-500" },
  };

  return (
    <span className={status[statusValue].color}>
      {status[statusValue].label}
    </span>
  );
};

export default BookingStatusBadge;
