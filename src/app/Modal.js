import React, { useState } from "react";

const Modal = ({ isOpen, onClose, data }) => {
  const [showSaccoData, setShowSaccoData] = useState(false);
  const [showPdata, setShowPdata] = useState(false);
  const [showIncomeData, setShowIncomeData] = useState(false);

  if (!isOpen || !data || !data.user || !data.user.entities) {
    return null;
  }

  const { user } = data;
  const entities = user.entities;

  const toggleSaccoData = () => {
    setShowSaccoData(!showSaccoData);
  };

  const togglePersonalData = () => {
    setShowPdata(!showPdata);
  };

  const toggleIncomeData = () => {
    setShowIncomeData(!showIncomeData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-container bg-lime-300 p-8 rounded-lg shadow-lg"
        key={data.id}
      >
        <aside className="flex">
          <h2 className="text-2xl font-bold mb-4 text-stone-900 font-extrabold">
            User Details
          </h2>
          <button
            className="ml-60 bg-red-500 py-2 px-2 rounded-lg text-blue-800 hover:scale-105"
            onClick={onClose}
          >
            X
          </button>
        </aside>
        <div className="font-bold text-lime-800">
          <button
            onClick={togglePersonalData}
            className="bg-emerald-400 px-5 py-3 rounded-lg text-green-900 font-bold hover:scale-105 active:scale-100"
          >
            Personal Details
          </button>
          {showPdata && (
            <div className="text-violet-800 mt-4">
              <h2>
                <span className="font-bold text-black mr-2">Name: </span>{" "}
                {data.user.first_name} {data.user.last_name}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">Username: </span>{" "}
                {data.user.username}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">Personal ID:</span>{" "}
                {data.personal_id}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">
                  Phone Number:{" "}
                </span>{" "}
                {data.phone_no}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">Gender: </span>{" "}
                {data.gender}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">
                  Marital Status:{" "}
                </span>{" "}
                {data.marital_status}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">
                  Date of Birth:{" "}
                </span>{" "}
                {data.dob}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">
                  Postal Address:{" "}
                </span>{" "}
                {data.postal_address}
              </h2>
            </div>
          )}
          <br />
          <button
            onClick={toggleIncomeData}
            className="bg-emerald-400 px-9 py-3 rounded-lg text-green-900 font-bold hover:scale-105 active:scale-100 mt-5"
          >
            Income Data
          </button>
          {showIncomeData && (
            <div className="text-violet-800 mt-4">
              <h2>
                <span className="font-bold text-black mr-2">Tax ID: </span>
                {data.tax_id_no}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">
                  Monthly Contribution:{" "}
                </span>
                {data.monthly_contribution}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">
                  Payment Method:{" "}
                </span>
                {data.remittance_method}
              </h2>
              <h2>
                <span className="font-bold text-black mr-2">Status: </span>
                {data.status}
              </h2>
              <h2>{data.email}</h2>
            </div>
          )}
        </div>
        <ul>
          {entities.map((entity, index) => (
            <div key={entity.id} className="dropdown">
              <button
                onClick={toggleSaccoData}
                className="bg-emerald-400 px-9 py-3 rounded-lg text-green-900 font-bold hover:scale-105 active:scale-100 mt-5"
              >
                Sacco Data
              </button>
              {showSaccoData && (
                <li className="text-violet-800 font-bold mt-4" key={index}>
                  <h2 className="">
                    <span className="font-bold text-black  mr-2">
                      Sacco Name:
                    </span>

                    {entity.name}
                  </h2>
                  <h3>
                    <span className="font-bold text-black mr-2">
                      Physical Address:{" "}
                    </span>
                    {entity.physical_address}
                  </h3>
                  <h3 className="mb-6">
                    <span className="font-bold text-black mr-2">Status: </span>

                    <span className="text-lime-900 font-bold ">
                      {entity.status}
                    </span>
                  </h3>
                  <div className="mt-6">
                    <img src={entity.logo} alt={`Logo for ${entity.name}`} />
                  </div>
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
