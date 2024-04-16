import useCurrentUser from "@/hooks/useCurrentUser";
import { PropsWithChildren, useEffect } from "react";
import { PageLoading } from "./shared";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useCurrentUser();
  const isAuthenticated = data?.user.role === "authenticated";

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      window.location.pathname = "/login";
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) return <PageLoading />;

  if (isAuthenticated) return children;
};

export default AuthProvider;