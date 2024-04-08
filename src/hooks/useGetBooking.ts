import { getBooking } from "@/services/apiBookings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useGetBooking = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(Number(id)),
  });
};

export default useGetBooking;
