import { updateBooking } from "@/services/apiBookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useCheckOutBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBooking,
    onSuccess: (booking) => {
      queryClient.invalidateQueries({ exact: true });
      toast.success(`رزرو #${booking.id} با موفقیت تسویه شد.`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useCheckOutBooking;
