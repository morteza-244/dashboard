import { updateBooking } from "@/services/apiBookings";
import { TCheckInObject } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useCheckInBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: TCheckInObject) =>
      updateBooking({
        ...data,
        isPaid: true,
        status: "checked_in",
      }),
    onSuccess: (booking) => {
      queryClient.invalidateQueries({ exact: true });
      toast.success(`رزرو #${booking.id} با موفقیت تایید شد.`);
      navigate("/bookings");
    },
    onError: () => {
      toast.error("مشکلی به وجود امده است, لطفا دوباره امتحان کنید");
    },
  });
};

export default useCheckInBooking;
