import { updateBooking } from "@/services/apiBookings";
import { TCheckInObject } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const useCheckInBooking = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: TCheckInObject) => updateBooking(Number(id), data),
    onSuccess: (booking) => {
      queryClient.invalidateQueries({ exact: true });
      toast.success(`رزرو #${booking.id} با موفقیت تایید شد.`);
      navigate("/bookings")
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCheckInBooking;
