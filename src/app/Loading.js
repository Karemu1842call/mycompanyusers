import React from "react";

export default function Loading() {
  return (
    <div className="loading-container ">
      <div className="mb-60">
        <h1 className="head-text text-cyan-500 text-center text-3xl font-bold">
          Company <span className="text-white">-</span>
          <span className="text-green-500"> Users. </span>
        </h1>
      </div>
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}
