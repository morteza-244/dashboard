import { SubmitLoading } from "@/components/shared";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import useCheckOutBooking from "@/hooks/useCheckOutBooking";
import { TStatus } from "@/types";
import { useNavigate } from "react-router-dom";

interface CheckInButtonProps {
  bookingStatus: TStatus;
  bookingId: number;
}

const CheckInButton = ({ bookingStatus, bookingId }: CheckInButtonProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { mutate, isPending } = useCheckOutBooking();
  return (
    <>
      {bookingStatus === "unconfirmed" && (
        <Button
          size={"sm"}
          variant={theme === "dark" ? "outline" : "default"}
          onClick={() => navigate(`/checkIn/${bookingId}`)}
        >
          ویرایش اطلاعات
        </Button>
      )}
      {bookingStatus === "checked_in" && (
        <Button
          disabled={isPending}
          onClick={() =>
            mutate({
              id: bookingId,
              status: "checked_out",
            })
          }
        >
          {isPending ? <SubmitLoading /> : "تسویه شود"}
        </Button>
      )}
    </>
  );
};

export default CheckInButton;
