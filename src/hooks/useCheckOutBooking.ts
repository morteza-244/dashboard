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
    onError: () => {
      toast.error("مشکلی به وجود امده است, لطفا دوباره امتحان کنید");
    },
  });
};

export default useCheckOutBooking;
