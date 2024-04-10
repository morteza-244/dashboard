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
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteBooking;
