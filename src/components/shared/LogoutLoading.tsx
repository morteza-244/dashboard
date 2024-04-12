import { dotStream } from "ldrs";
import { useTheme } from "@/components/ThemeProvider";

const LogoutLoading = () => {
  dotStream.register();
  const { theme } = useTheme();
  return (
    <l-dot-stream
      size="50"
      speed="2.5"
      color={theme === "dark" ? "white" : "black"}
    ></l-dot-stream>
  );
};

export default LogoutLoading;
