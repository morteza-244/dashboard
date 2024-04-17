import { deleteBooking } from "@/services/apiBookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      navigate("/bookings");
      toast.success("رزرو با موفقیت حذف شد");
    },
    onError: () => {
      toast.error("مشکلی به وجود امده است, لطفا دوباره امتحان کنید");
    },
  });
};

export default useDeleteBooking;
