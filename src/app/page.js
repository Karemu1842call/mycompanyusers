"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Loading from "./Loading";
import Loginform from "./Loginform";

export default function Page() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowMore = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://176.58.110.189/api/member/");
        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <Loginform setIsLoggedIn={setIsLoggedIn} />;
  }

  if (!data || data.length === 0) {
    return <Loading />;
  }

  return (
    <div className="box-container ">
      <h1 className="head-text text-cyan-500 text-center text-3xl font-bold">
        Company <span className="text-white">-</span>
        <span className="text-green-500"> Users. </span>
      </h1>
      <h2 className="text-center mt-10 text-green-200 font-bold">
        This is a view of all the X company users.
      </h2>
      <div className="card-container">
        {data.map((item) => (
          <div class="card hover:scale-105 " key={item.id}>
            <div className="hover:scale-105 ">
              <h1 className="font-bold text-center text-2xl mb-3 underline text-blue-800">
                User Details
              </h1>
              <div className="text-orange-700">
                <h2>
                  Name: {item.user.first_name} {item.user.last_name}
                </h2>
                <h2>Personal ID: {item.personal_id}</h2>
                <h2>Phone Number: {item.phone_no}</h2>
                <h2>Gender: {item.gender}</h2>
                <h2>Marital Status: {item.marital_status}</h2>
              </div>

              <button
                onClick={() => handleShowMore(item)}
                className="bg-green-500 px-2 rounded-lg py-2 text-gray-100 hover:scale-105 ml-10 active:scale-100"
              >
                Show more
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedData}
      />
    </div>
  );
}
