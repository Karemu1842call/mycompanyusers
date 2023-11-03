import React, { useState } from "react";

const Modal = ({ isOpen, onClose, data }) => {
  const [showSaccoData, setShowSaccoData] = useState(false);
  const [showPdata, setShowPdata] = useState(false);
  const [incomeData, setIncomaData] = useState(false);
  if (!isOpen || !data || !data.user || !data.user.entities) {
    return null;
  }

  const { user } = data;

  const entities = user.entities;
  const showsaccodetails = () => {
    setShowSaccoData(!showSaccoData);
  };
  const showpdetails = () => {
    setShowPdata(!showPdata);
  };
  const showincomedata = () => {
    setIncomaData(!incomeData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-lime-300 p-8 rounded-lg shadow-lg">
        <aside className="flex">
          <h2 className="text-2xl font-bold mb-4">User Details</h2>
          <button
            className="ml-60 bg-red-500 py-2 px-2 rounded-lg text-blue-800  hover:scale-105 "
            onClick={onClose}
          >
            X
          </button>
        </aside>
        <div className=" font-bold text-lime-800">
          <button
            onClick={showpdetails}
            className="bg-green-400 px-5 rounded-lg text-green-900 text-bold hover:scale-105 active:scale-100"
          >
            Personal Details{" "}
          </button>
          {showPdata && (
            <div>
              <h2>
                Name: {data.user.first_name} {data.user.last_name}
              </h2>
              <h2>Username: {data.user.username}</h2>
              <h2>Personal ID: {data.personal_id}</h2>
              <h2>Phone Number: {data.phone_no}</h2>
              <h2>Gender: {data.gender}</h2>
              <h2>Marital Status: {data.marital_status}</h2>
              <h2>Date of Birth: {data.dob}</h2>
              <h2>Postal Address: {data.postal_address}</h2>
            </div>
          )}
          <br />
          <button
            onClick={showincomedata}
            className="bg-green-400 px-5 rounded-lg text-green-900 text-bold hover:scale-105 active:scale-100 mt-5"
          >
            Income Data{" "}
          </button>
          {incomeData && (
            <div>
              <h2>Tax ID: {data.tax_id_no}</h2>
              <h2>Sacco Id:{data.sacco_id}</h2>
              <h2>Location_Id: {data.member_location_id}</h2>
              <h2>Source Id: {data.income_source_id}</h2>
              <h2>Monthly Contribution: {data.monthly_contribution}</h2>
              <h2>Payment Method: {data.remittance_method}</h2>
              <h2>Status: {data.status}</h2>
              <h2>{data.email}</h2>
            </div>
          )}
        </div>
        <ul>
          {entities.map((entity, index) => (
            <div className="dropdown">
              <button
                onClick={showsaccodetails}
                className="bg-green-400 px-5 rounded-lg text-green-900 text-bold hover:scale-105 active:scale-100 font-bold mt-5"
              >
                Sacco Data
              </button>
              {showSaccoData && (
                <li className="text-black" key={index}>
                  <h2 className="text-3xl">
                    <span className="font-bold text-2xl text-center ml-20">
                      Affiliated Sacco.
                    </span>{" "}
                    <br />
                    {entity.name}
                  </h2>
                  <h3>Physical Address: {entity.physical_address}</h3>
                  <h3>
                    Status:{" "}
                    <span className="text-green-500 font-bold">
                      {entity.status}
                    </span>
                  </h3>
                  <h3>Email: {entity.email}</h3>

                  <img src={entity.logo} alt={`Logo for ${entity.name}`} />
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
