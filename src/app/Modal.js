import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-orange-300 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <div className=" font-bold text-lime-800">
          <h2>
            Name: {data.user.first_name} {data.user.last_name}
          </h2>
          <h2>Personal ID: {data.personal_id}</h2>
          <h2>Phone Number: {data.phone_no}</h2>
          <h2>Gender: {data.gender}</h2>
          <h2>Marital Status: {data.marital_status}</h2>
          <h2>Date of Birth: {data.dob}</h2>
          <h2>Tax ID: {data.tax_id_no}</h2>
          <h2>Postal Address: {data.postal_address}</h2>
        </div>
        <button
          className="bg-red-300 px-2 rounded-lg py-2 text-blue-800 mr-3 hover:scale-105 mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
     
    </div>
  );
};

export default Modal;
