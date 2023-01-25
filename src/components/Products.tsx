import { Link, Outlet } from "react-router-dom";
export const Products = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        name="product"
        className="productInput"
      />
      <nav>
        <Link to="featured" className="tag">
          {" "}
          Featured
        </Link>
        <Link to="new" className="tag">
          {" "}
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
