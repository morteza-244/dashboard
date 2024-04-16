import { getStaysTodayActivity } from "@/services/apiBookings";
import { useQuery } from "@tanstack/react-query";

const useTodayActivity = () => {
  return useQuery({
    queryKey: ["todayActivity"],
    queryFn: getStaysTodayActivity,
  });
};

export default useTodayActivity;
