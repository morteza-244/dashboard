import { SubmitLoading } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import useCheckInBooking from "@/hooks/useCheckInBooking";
import useSettings from "@/hooks/useSettings";
import { formatCurrency } from "@/lib/utils";
import { TBooking } from "@/types";
import { useEffect, useState } from "react";

interface CheckInFooterProps {
  fullName: string;
  booking: TBooking;
}

const CheckInFooter = ({ fullName, booking }: CheckInFooterProps) => {
  const [isPaid, setIsPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { mutate, isPending } = useCheckInBooking();
  const { data: settings } = useSettings();

  const optionalBreakfastPrice =
    settings?.breakfastPrice! * booking.numNights! * booking.numGuests!;

  const totalPrices = formatCurrency(
    booking.totalPrice! + optionalBreakfastPrice
  );

  const totalPrice = formatCurrency(booking.totalPrice!);

  const handleCheckIn = () => {
    if (addBreakfast) {
      mutate({
        id: booking.id,
        hasBreakfast: true,
        extrasPrice: booking.extrasPrice! + optionalBreakfastPrice,
        totalPrice: booking.totalPrice! + optionalBreakfastPrice,
      });
    } else {
      mutate({
        id: booking.id,
      });
    }
  };

  useEffect(() => {
    setIsPaid(booking.isPaid!);
  }, [booking.isPaid]);

  return (
    <>
      {!booking.hasBreakfast && (
        <div className="flex items-center gap-2">
          <Checkbox
            id="confirm"
            checked={addBreakfast}
            disabled={addBreakfast}
            onCheckedChange={() => {
              setAddBreakfast(!addBreakfast);
              setIsPaid(false);
            }}
          />
          <label
            htmlFor="confirm"
            className={`text-[14px] sm:text-[16px] mt-1 ${
              addBreakfast && "text-slate-500"
            }`}
          >
            صبحانه اضافه شود (هزینه صبحانه{" "}
            {formatCurrency(optionalBreakfastPrice)})
          </label>
        </div>
      )}
      <div className="flex items-center gap-2">
        <Checkbox
          id="confirm"
          checked={isPaid}
          disabled={isPaid}
          onCheckedChange={() => setIsPaid(!isPaid)}
        />
        <label
          htmlFor="confirm"
          className={`text-[14px] sm:text-[16px] mt-1 ${
            isPaid && "text-slate-500"
          }`}
        >
          {fullName} کل مبلغ ( {!addBreakfast ? totalPrice : totalPrices} ) را
          پرداخت کرد.
        </label>
      </div>

      <Button disabled={!isPaid} onClick={handleCheckIn}>
        {isPending ? <SubmitLoading /> : `تایید رزرو ${booking.id}`}
      </Button>
    </>
  );
};

export default CheckInFooter;
