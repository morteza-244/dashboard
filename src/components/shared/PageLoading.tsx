import { miyagi } from "ldrs";
import { useTheme } from "@/components/ThemeProvider";

const PageLoading = () => {
  miyagi.register();
  const { theme } = useTheme();
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <span>منتظر بمانید</span>
      <l-miyagi
        size="25"
        stroke="3"
        speed="0.9"
        color={theme === "dark" ? "white" : "black"}
      ></l-miyagi>
    </div>
  );
};

export default PageLoading;
