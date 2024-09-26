import React from 'react';
import './EmployeeCard.css';

function EmployeeCard({ firstName, lastName, age, position, experience, imageUrl }) {
  return (
    <div className="employee-card">
      <img src={imageUrl} alt={`${firstName} ${lastName}`} className="employee-image" />
      <h2>{firstName} {lastName}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Experience:</strong> {experience}</p>
    </div>
  );
}

export default EmployeeCard;

