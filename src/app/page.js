"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Loading from "./Loading";
import Loginform from "./Loginform";
import Hook from "./Hook";
import Navbar from "./Navbar";

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
    <>
      <div className="box-container py-20 px-10">
        <div>
          {" "}
         
        
          <div className="nav">
            <Navbar />
          </div>
        </div>
        <div className="beside">
        <h1 className="head-text text-cyan-500 text-center text-3xl font-bold">
            Company 
            <span className="text-green-500"> X </span>
          </h1>
        <h2 className="text-center mt-10 text-green-200 font-bold">
            This is a view of all the X company users.
          </h2> 
          <div className="card-container">
            {data.map((item) => (
              <div className="card hover:scale-105" key={item.id}>
                <div className="p-4 border border-gray-300 rounded-lg">
                  <h1 className="font-bold text-center text-2xl mb-3 underline text-blue-800">
                    User Details
                  </h1>
                  <div className="flex flex-col items-start mb-4">
                    <p className="text-stone-900 font-bold">
                      <span className="font-semibold">Name:</span>{" "}
                      {item.user.first_name} {item.user.last_name}
                    </p>
                    <p className="text-stone-900 font-bold">
                      <span className="font-semibold">Personal ID:</span>{" "}
                      {item.personal_id}
                    </p>
                    <p className="text-stone-900 font-bold">
                      <span className="font-semibold">Phone Number:</span>{" "}
                      {item.phone_no}
                    </p>
                    <p className="text-stone-900 font-bold">
                      <span className="font-semibold">Gender:</span>{" "}
                      {item.gender}
                    </p>
                    <p className="text-stone-900 font-bold">
                      <span className="font-semibold">Marital Status:</span>{" "}
                      {item.marital_status}
                    </p>
                  </div>

                  <button
                    onClick={() => handleShowMore(item)}
                    className="bg-green-500 px-4 py-2 rounded-lg text-gray-100 hover:bg-green-600 transition duration-300"
                  >
                    Show more
                  </button>
                  <button className="ml-5 bg-orange-500 px-2 py-2 rounded-lg text-gray-100 hover:bg-green-600 transition duration-300">
                    Edit
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
      </div>
    </>
  );
}
