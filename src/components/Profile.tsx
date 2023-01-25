import { useAuth } from "./Auth";
import { useNavigate, Link, Outlet } from "react-router-dom";
export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handle = () => {
    auth.logOut();
    navigate("/", { replace: true });
  };
  return (
    <>
      <h2>Welcome {auth.user}</h2>
      <Link to="editProfile">Edit Profile</Link>
      <Outlet />
      <button onClick={handle}>LogOut</button>
    </>
  );
};
