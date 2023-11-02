"use client";
import React, { useState } from "react";
function Loginform({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const tempSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!"); 
    setIsLoggedIn(true);
  };
  

  return (
    <>
      <section className="bg-blue-700">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 className="text-6xl font-bold mb-5 pb-2 mb-4 text-4xl tracking-tight text-center text-yellow-300">
            Login
          </h1>

          <p className="mb-8 lg:mb-16 font-bold text-center text-green-200">
            Please Enter your details to login
          </p>
          <form className="space-y-9" onSubmit={tempSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-yellow-200"
              >
                Your username
              </label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="loginp text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-blue-300 "
                placeholder="Enter your username"
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-yellow-200"
              >
                Your Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginp text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-blue-300 "
                placeholder="Enter your Password...."
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              />
            </div>

            <button
              type="submit"
              className="text-blue-900 bg-green-400 px-10 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 active:scale-95"
            >
              Login
            </button>
          </form>
          <div className="parent-container mt-8">
            <div className="text-yellow-300 font-bold ">
              <h2 className="text-2xl ">
                Don't have an account?
                <button className="ml-4 hover:text-green-500 ">Signup</button>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Loginform;
