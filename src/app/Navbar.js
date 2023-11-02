import React from "react";

const Navbar = () => {
  return (
    <div className="sideBar container mt-5 font-bold">
      <div className="navbar_elements row mt-3 px-3 ">
        <button
          className="mt-10"
          Disabled
          activeClassName="active"
          to="/dashboard"
        >
          <div className="menu-cols">
          <div className="navbar_elements row mt-3 px-3 ">
        <button className="mt-10" Disabled activeClassName="active" to='/dashboard'>
          <div className="menu-cols mr-4">
          <h1 className="head-text text-cyan-500 text-center text-3xl ">
            Home
          </h1>
          </div>
        </button >
      </div>
          </div>
        </button>
      </div>{" "}
      <div className="navbar_elements mr-6 row mt-3 px-3 ">
        <button
          className="mt-10"
          Disabled
          activeClassName="active"
          to="/users"
        >
          <div className="menu-cols">
            <p>Users</p>
          </div>
        </button>
      </div>
      <div className="navbar_elements row mt-3 px-3 ">
        <button
          className="mt-10"
          Disabled
          activeClassName="active"
          to="/User Trend"
        >
          <div className="menu-cols">
            <p>Users Trend</p>
          </div>
        </button>
      </div>
      <div className="navbar_elements row mt-3 px-3 ">
        <button
          className="mt-10"
          Disabled
          activeClassName="active"
          to="/graphs"
        >
          <div className="menu-cols">
            <p>Analytics</p>
          </div>
        </button>
      </div>
      <div className="navbar_elements row mt-3 px-3 ">
        <button
          className="mt-10"
          Disabled
          activeClassName="active"
          to="/about_us"
        >
          <div className="menu-cols">
            <p>About Us</p>
          </div>
        </button>
      </div>
      <div className="navbar_elements row mt-3 mb-3 px-3 ">
        <button className="mt-10" activeClassName="active" to="/contact_us">
          <div className="menu-cols">
            <p>Contact Us</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
