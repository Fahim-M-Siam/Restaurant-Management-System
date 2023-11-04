// @ts-nocheck

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="flex-1 text-xl font-bold">
        <Link to="/">TasteHarmony Cafe</Link>
      </div>

      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-2">
          {/* Navbar menu content here */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline bg-[#C59D5F] text-white btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allfooditems"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline bg-[#C59D5F] text-white btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            All-Food-Items
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline bg-[#C59D5F] text-white btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Blogs
          </NavLink>

          {/* {user?.email ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.ibb.co/bLrMRXp/user.png" />
                  </div>
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  to="/user/addedfooditems"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  My-added-food-items
                </NavLink>
                <NavLink
                  to="/user/addfooditems"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Add a food item
                </NavLink>
                <NavLink
                  to="/user/orderedfooditems"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  My ordered food items
                </NavLink>

                <div
                  onClick={logout}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Login
            </NavLink>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
