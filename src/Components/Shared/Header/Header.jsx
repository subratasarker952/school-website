import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "/logo.png";

const Header = () => {
  const { user, logOutUser } = useAuth();

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const menu = (
    <>
      <NavLink className={"font-bold p-2 m-2"} to="/">
        Home
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/gallery">
        Gallery
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/students">
        Students
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/faculty">
        Faculty
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/admissions">
        Admissions
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/academics">
        Academics
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/about">
        About
      </NavLink>
      <NavLink className={"font-bold p-2 m-2"} to="/contact">
        Contact
      </NavLink>
      {/* {user && (
        <NavLink className={"p-2 m-2"} to="/dashboard">
          Dashboard
        </NavLink>
      )} */}
    </>
  );
  return (
    <div className="sticky z-10 top-0 left-0">
      <div className="navbar bg-base-200 ">
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
              {menu}
            </ul>
          </div>
          <Link to={"/"}>
            <p className="flex justify-center items-center  text-orange-600">
              <img src={logo} alt="" className=" w-12 px-2" />
              <span className="text-3xl"> Springdale Public School</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end hidden">
          {user ? (
            <button onClick={handleLogOutUser} className="btn">
              LogOut
            </button>
          ) : (
            <button className="btn">
              <NavLink className={"p-2 m-2"} to="/login">
                Login
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
