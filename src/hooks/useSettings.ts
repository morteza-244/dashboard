import { getSettings } from "@/services/apiSettings";
import { useQuery } from "@tanstack/react-query";

const useSettings = () => {
  return useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
};

export default useSettings;
