// MyAppointments.js
import React from 'react';
import './MyAppointments.css';

const MyAppointments = () => {
  return (
    <nav className="navbar">
      <div className="logo">MY APPOINMENTS</div>
      <ul className="nav-links">
        <li><a href="/pview">My patients</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default MyAppointments;
