import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data || !data.user || !data.user.entities) {
    return null;
  }

  const { user, personal_id, phone_no, gender, marital_status, dob, tax_id_no, postal_address, sacco_id, member_location_id, income_source_id, monthly_contribution, remittance_method, status } = data;

  const entities = user.entities;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-lime-300 p-8 rounded-lg shadow-lg">
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
          <h2>Sacco Id:{data.sacco_id}</h2>
          <h2>Location_Id: {data.member_location_id}</h2>
          <h2>Source Id: {data.income_source_id}</h2>
          <h2>Monthly Contribution: {data.monthly_contribution}</h2>
          <h2>Payment Method: {data.remittance_method}</h2>
          <h2>Status: {data.status}</h2>
          <h2>Username: {data.user.username}</h2>
          <h2>{data.email}</h2>
        
        </div>
        <ul>
          {entities.map((entity, index) => (
            <li key={index}>
              <h2>Name: {entity.name}</h2>
              <p>Physical Address: {entity.physical_address}</p>
              <p>Status: {entity.status}</p>
              <img src={entity.logo} alt={`Logo for ${entity.name}`} />
              <p>Email: {entity.email}</p>
            </li>
          ))}
        </ul>
        {/* ...other components */}
      </div>
    </div>
  );
};

export default Modal;
