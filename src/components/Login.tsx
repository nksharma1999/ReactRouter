import { useRef } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const username = useRef<any>("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    auth.login(username.current.value);
    navigate("/", { replace: true });
  };
  return (
    <>
      <label htmlFor="username"> Username</label>
      <input type="text" id="username" ref={username} />
      <button onClick={handleClick}>Login</button>
    </>
  );
};
