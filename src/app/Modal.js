import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-orange-300 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <div className="text-gray-800">
          <h2>
            Name: {data.user.first_name} {data.user.last_name}
          </h2>
          <p>Personal ID: {data.personal_id}</p>
          <p>Phone Number: {data.phone_no}</p>
          <p>Gender: {data.gender}</p>
          <p>Marital Status: {data.marital_status}</p>
          <p>Date of Birth: {data.dob}</p>
          <p>Tax ID: {data.tax_id_no}</p>
          <p>Postal Address: {data.postal_address}</p>
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
