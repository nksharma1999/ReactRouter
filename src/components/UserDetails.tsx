import { useParams } from "react-router-dom";
export const UserDetails = () => {
  const { userId } = useParams();
  return (
    <>
      <p>User details {userId}</p>
    </>
  );
};
