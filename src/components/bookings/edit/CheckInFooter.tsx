import { SubmitLoading } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import useCheckInBooking from "@/hooks/useCheckInBooking";
import { useState } from "react";

interface CheckInFooterProps {
  bookingId: number;
  fullName: string;
}

const CheckInFooter = ({ bookingId, fullName }: CheckInFooterProps) => {
  const [isPaid, setIsPaid] = useState(false);
  const { mutate, isPending } = useCheckInBooking();

  return (
    <>
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
          {fullName} کل مبلغ را پرداخت کرد.
        </label>
      </div>
      <Button
        disabled={!isPaid}
        onClick={() =>
          mutate({
            isPaid,
            status: "checked_in",
          })
        }
      >
        {isPending ? <SubmitLoading /> : `تایید رزرو ${bookingId}`}
      </Button>
    </>
  );
};

export default CheckInFooter;
