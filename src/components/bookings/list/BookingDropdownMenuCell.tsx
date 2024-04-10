import DeleteModal from "@/components/shared/DeleteModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCheckOutBooking from "@/hooks/useCheckOutBooking";
import { TStatus } from "@/types";
import { Ellipsis, Eye, Handshake, Pencil, Trash } from "lucide-react";
import { useState } from "react";
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
  const { mutate } = useCheckOutBooking();
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(!open);
  };
  return (
    <>
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
          <DropdownMenuItem
            className="justify-between"
            onClick={() => setOpen(!open)}
          >
            <Trash size={20} />
            حذف
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
          {bookingStatus === "checked_in" && (
            <DropdownMenuItem
              className="justify-between"
              onClick={() =>
                mutate({
                  id: bookingId,
                  status: "checked_out",
                })
              }
            >
              <Handshake size={20} />
              تسویه شود
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteModal open={open} onClose={onClose} bookingId={bookingId} />
    </>
  );
};

export default BookingDropdownMenuCell;
