import { SkeletonTheme as ReactSkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "../ThemeProvider";
import { PropsWithChildren } from "react";

const SkeletonTheme = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  return (
    <ReactSkeletonTheme
      baseColor={`${theme === "dark" ? "#9ca3af" : "#d1d5db"}`}
      highlightColor={`${theme === "dark" ? "#d1d5db" : "#e5e7eb"}`}
    >
      {children}
    </ReactSkeletonTheme>
  );
};

export default SkeletonTheme;
