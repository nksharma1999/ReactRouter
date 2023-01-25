import { Outlet, useSearchParams, useLocation } from "react-router-dom";
export const Users = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const showActiveUsers = searchParam.get("filter") === "active";
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <h1>User1</h1>
      <h1>User2</h1>

      <h1>User3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParam({ filter: "active" })}>
          Active User
        </button>
        <button onClick={() => setSearchParam({})}>Reset Filter</button>

        {showActiveUsers ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing All Users</h2>
        )}

        <h4>{query.get("filter")}</h4>
      </div>
    </>
  );
};
