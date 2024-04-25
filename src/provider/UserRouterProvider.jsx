import Fallback from "@/pages/Fallback";
import { useGetCurrentUser } from "@/react-query/query/auth.query";
import { Navigate } from "react-router-dom";

export default function UserRouterProvider({ Component }) {
  const { isLoading, data } = useGetCurrentUser();

  if (isLoading) return <Fallback />;
  if (!data && !isLoading) return <Navigate to={`/login`} />;
  return <Component />;
}
