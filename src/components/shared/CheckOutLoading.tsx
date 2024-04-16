import { dotPulse } from "ldrs";
import { useTheme } from "@/components/ThemeProvider";

const CheckOutLoading = () => {
  const { theme } = useTheme();

  dotPulse.register();
  return (
    <l-dot-pulse
      size="28"
      speed="1.3"
      color={theme === "dark" ? "white" : "black"}
    ></l-dot-pulse>
  );
};

export default CheckOutLoading;
