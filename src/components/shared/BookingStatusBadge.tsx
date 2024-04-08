import { TStatus } from "@/types";

interface BookingStatusBadgeProps {
  statusValue: TStatus;
}

const BookingStatusBadge = ({ statusValue }: BookingStatusBadgeProps) => {
  const status: Record<TStatus, { label: string; color: string }> = {
    checked_in: {
      label: "در حال بررسی",
      color: "inProgress-badge",
    },
    checked_out: {
      label: "تحویل داده شد",
      color: "success-badge",
    },
    unconfirmed: { label: "تایید نشد", color: "unconfirmed-badge" },
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded text-xs font-medium ${status[statusValue].color}`}
    >
      {status[statusValue].label}
    </span>
  );
};

export default BookingStatusBadge;
