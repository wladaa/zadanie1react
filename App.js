import React from 'react';
import EmployeeCard from './EmployeeCard';
import './App.css';

function App() {
  const employees = [
    {
      firstName: "Jan",
      lastName: "Kowalski",
      age: "29",
      position: "Driver",
      experience: "4 years",
      imageUrl: "https://info.drivedifferent.com/hubfs/SMI-BLOG-Ways-to-Improve-Drivers-Happiness%20%281%29.jpg" 
    },
    {
      firstName: "Anna",
      lastName: "Nowak",
      age: "42",
      position: "Teacher",
      experience: "18 years",
      imageUrl: "https://www.theoaklandpress.com/wp-content/uploads/2023/05/TOP-L-Vitality-teacher0511_1.jpeg?w=525"
    },
    {
      firstName: "Robert",
      lastName: "Lis",
      age: "35",
      position: "Chef",
      experience: "8 years",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPVERV4zfi9k9E1KykDQws5z_WG2DvIhtdg&s"
    }
  ];

  return (
    <div className="App">
      <div className="employee-card-container">
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            firstName={employee.firstName}
            lastName={employee.lastName}
            age={employee.age}
            position={employee.position}
            experience={employee.experience}
            imageUrl={employee.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

