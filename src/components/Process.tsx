import { useNavigate } from "react-router-dom";
export const Process = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Process</h1>
      <button onClick={() => navigate(-1)}> Go Back</button>
    </>
  );
};
