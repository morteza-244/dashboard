import { TStatus } from "@/types";

interface BookingStatusBadgeProps {
  statusValue: TStatus;
}

const BookingStatusBadge = ({ statusValue }: BookingStatusBadgeProps) => {
  const status: Record<TStatus, { label: string; color: string }> = {
    checked_in: {
      label: "تایید شد",
      color: "success-badge",
    },
    checked_out: {
      label: "تسویه شد",
      color: "inProgress-badge",
    },
    unconfirmed: { label: "تایید نشد", color: "unconfirmed-badge" },
  };

  return (
    <p
      className={`w-16 flex items-center justify-center py-1 rounded text-xs font-medium ${status[statusValue].color}`}
    >
      {status[statusValue].label}
    </p>
  );
};

export default BookingStatusBadge;
