import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TStatus } from "@/types";
import { Ellipsis, Eye, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookingDropdownMenuCellProps {
  bookingId: number;
  bookingStatus: TStatus;
}

const BookingDropdownMenuCell = ({
  bookingId,
  bookingStatus,
}: BookingDropdownMenuCellProps) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem
          className="justify-between"
          onClick={() => navigate(`/bookings/${bookingId}`)}
        >
          <Eye size={20} />
          مشاهده
        </DropdownMenuItem>
        {bookingStatus === "unconfirmed" && (
          <DropdownMenuItem
            className="justify-between"
            onClick={() => navigate(`/checkIn/${bookingId}`)}
          >
            <Pencil size={20} />
            ویرایش
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BookingDropdownMenuCell;
