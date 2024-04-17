import { BookingStatusBadge, CheckOutLoading } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import useCheckOutBooking from "@/hooks/useCheckOutBooking";
import { formatCurrency, formatDistanceFromNow } from "@/lib/utils";
import { TStatus, TTodayBooking } from "@/types";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CarouselCardProps {
  booking: TTodayBooking;
}

const CarouselCard = ({ booking }: CarouselCardProps) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCheckOutBooking();

  return (
    <CarouselItem
      key={booking.id}
      className="rounded-lg bg-slate-50 dark:bg-gray-800 shadow-md basis-5/6 sm:basis-3/6 md:basis-3/6 lg:basis-4/6 p-4 space-y-2"
    >
      <p>{booking.guests?.fullName}</p>
      <small>{formatDistanceFromNow(booking.created_at!)}</small>
      <p className="text-[14px]">{formatCurrency(booking.totalPrice!)}</p>
      <div className="flex items-center gap-1">
        <p className="text-sm">{booking.numNights + " شب"}</p>
        <Plus size={15} />
        <p className="text-sm">{booking.numGuests + " نفر"}</p>
      </div>
      <div className="flex gap-2 justify-end">
        <BookingStatusBadge statusValue={booking.status as TStatus} />
        {booking.status === "checked_in" && (
          <Button
            size={"sm"}
            className="rounded"
            disabled={isPending}
            onClick={() =>
              mutate({
                id: booking.id!,
                status: "checked_out",
              })
            }
          >
            {isPending ? <CheckOutLoading /> : "تسویه شود"}
          </Button>
        )}
        {booking.status === "unconfirmed" && (
          <Button
            size={"sm"}
            className="rounded"
            onClick={() => navigate(`/bookings/${booking.id}`)}
          >
            بررسی رزرو
          </Button>
        )}
      </div>
    </CarouselItem>
  );
};

export default CarouselCard;
