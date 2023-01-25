import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";
export const RequireAuth = ({ children }: any) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};
