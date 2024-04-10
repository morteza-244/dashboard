import { SubmitLoading } from "@/components/shared";
import DeleteModal from "@/components/shared/DeleteModal";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import useCheckOutBooking from "@/hooks/useCheckOutBooking";
import { TStatus } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CheckInButtonProps {
  bookingStatus: TStatus;
  bookingId: number;
}

const CheckInButton = ({ bookingStatus, bookingId }: CheckInButtonProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { mutate, isPending } = useCheckOutBooking();
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(!open);
  };
  return (
    <div className="flex gap-3 flex-wrap">
      {bookingStatus === "unconfirmed" && (
        <Button
          variant={theme === "dark" ? "secondary" : "default"}
          onClick={() => navigate(`/checkIn/${bookingId}`)}
        >
          ویرایش اطلاعات
          <Pencil size={17} className="mr-1"/>
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
      <Button onClick={onClose}>
        حذف رزرو <Trash2 size={20} className="mr-1" />
      </Button>
      <DeleteModal open={open} onClose={onClose} bookingId={bookingId} />
    </div>
  );
};

export default CheckInButton;
