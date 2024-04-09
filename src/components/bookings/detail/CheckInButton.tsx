import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { TStatus } from "@/types";
import { useNavigate } from "react-router-dom";

interface CheckInButtonProps {
  bookingStatus: TStatus;
  bookingId: number;
}

const CheckInButton = ({ bookingStatus, bookingId }: CheckInButtonProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
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
    </>
  );
};

export default CheckInButton;
