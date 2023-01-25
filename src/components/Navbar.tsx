import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
export const NavBar: React.FC = () => {
  const auth = useAuth();
  return (
    <nav className="navbar">
      <NavLink to="/" className="tag">
        Home
      </NavLink>
      <NavLink to="/about" className="tag">
        About
      </NavLink>
      <NavLink to="/products" className="tag">
        Products
      </NavLink>
      <NavLink to="/profile" className="tag">
        Profile
      </NavLink>
      {auth.user && (
        <NavLink to="/users" className="tag">
          Users
        </NavLink>
      )}
      {!auth.user && (
        <NavLink to="/login" className="tag">
          Login
        </NavLink>
      )}
    </nav>
  );
};
