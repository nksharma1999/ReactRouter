import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/Navbar";
// import About from "./components/About";

import { Process } from "./components/Process";
import { NoPage } from "./components/NoPage";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { NewProduct } from "./components/NewProduct";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
import { EditProfile } from "./components/EditProfile";
const LazyLoadAbout = React.lazy(() => import("./components/About"));

export default function App() {
  return (
    <>
      <NavBar />
      <div className="renderPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyLoadAbout />
              </React.Suspense>
            }
          />
          <Route path="process" element={<Process />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<NewProduct />} />
          </Route>

          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          >
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />{" "}
              </RequireAuth>
            }
          >
            <Route path="editProfile" element={<EditProfile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}
