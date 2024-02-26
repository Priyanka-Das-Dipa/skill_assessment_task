import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextInfo } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContextInfo);
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("You have logout successfully", {
          position: "bottom-right",
          autoClose: 3000,
          bg: "dark",
        });
        navigate("/");
      })
      .catch((err) => {
        toast(err);
      });
  };
  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Tpayment</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && !loading ? (
            <p className="text-white">{user?.displayName}</p>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
          <button onClick={handleLogout}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
