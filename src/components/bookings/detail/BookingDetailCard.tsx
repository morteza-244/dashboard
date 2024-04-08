import { BookingStatusBadge } from "@/components/shared";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDistanceFromNow } from "@/lib/utils";
import { TBooking, TStatus } from "@/types";
import { format, isToday } from "date-fns-jalali";
import { CircleDollarSign, CircleHelp, DollarSign, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookingDetailCardProps {
  booking: TBooking;
  cabinName: string;
  guests: { fullName: string; email: string };
}

const BookingDetailCard = ({
  booking,
  cabinName,
  guests,
}: BookingDetailCardProps) => {
    const { theme } = useTheme();
  const navigate = useNavigate();

  const cabinPrice = formatCurrency(booking.cabinPrice!);
  const extrasPrice = formatCurrency(booking.extrasPrice!);

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center text-2xl font-bold">
          <h3>رزرو</h3>
          <p className="mt-[8px]">{booking.id}#</p>
          <BookingStatusBadge statusValue={booking.status as TStatus} />
        </div>
        <Button
          size={"sm"}
          onClick={() => navigate("/bookings")}
          variant={theme === "dark" ? "secondary" : "default"}
        >
          برگشت
        </Button>
      </div>
      <div className="booking-card">
        <div className="flex justify-between flex-wrap items-center p-5 gap-2">
          <p className="flex gap-2 items-center">
            <Home />
            <p className="text-[14px] md:text-[16px]">
              {booking.numNights} شب در اقامتگاه{" - "}
              {cabinName}
            </p>
          </p>
          <p className="flex text-[14px] md:text-[16px] leading-7">
            {format(new Date(booking?.startDate!), "EE d MMMM yyyy")} (
            {isToday(new Date(booking?.startDate!))
              ? "امروز"
              : formatDistanceFromNow(booking?.startDate!)}
            ) &mdash; {format(new Date(booking?.endDate!), "EE d MMMM yyyy")}
          </p>
        </div>
        <div className="p-5">
          <div className="space-y-3 text-[14px] md:text-[16px]">
            <p>{guests.fullName} </p>
            <p>{guests.email}</p>
            <p>تعداد نفرات : {booking.numGuests} نفر</p>
            <div className="flex gap-2 items-center">
              <CircleHelp />
              <p>شامل صبحانه؟</p>
              <span>{booking.hasBreakfast ? "بله" : "خیر"}</span>
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              <CircleDollarSign />
              قیمت کل :<span>{formatCurrency(booking.totalPrice!)}</span>
              <span>
                ({cabinPrice + " هزینه اقامتگاه "} +{" "}
                {extrasPrice + " هزینه های اضافی"})
              </span>
            </div>
            <div className="flex gap-2">
              <DollarSign />
              <h3>وضعیت پرداخت : </h3>
              <span>
                {booking.isPaid ? "پرداخت شد" : "در محل اقامتگاه پرداخت میشود"}
              </span>
            </div>
          </div>
          <p className="text-center mt-4 text-[14px] md:text-[16px] text-muted-foreground">
            رزرو شده در تاریخ{" "}
            {format(new Date(booking.created_at!), "EE d MMMM yyyy")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingDetailCard;
