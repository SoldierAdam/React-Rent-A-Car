import React, { useState } from "react";

import './Payment.css';

export default function Payment() {
 

  return (
    <div className="container">
    <h1 className="form-title">Registration</h1>
    <form action="#"/>
      <div className="main-user-info">
        <div class="user-input-box">
          <label for="fullName">Full Name</label>
          <input type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"/>
        </div>
        <div className="user-input-box">
          <label for="username">Username</label>
          <input type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"/>
        </div>
        <div className="user-input-box">
          <label for="email">Email</label>
          <input type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"/>
        </div>
        <div className="user-input-box">
          <label for="phoneNumber">Phone Number</label>
          <input type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"/>
        </div>
        <div className="user-input-box">
          <label for="password">Password</label>
          <input type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"/>
        </div>
        <div className="user-input-box">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"/>
        </div>
      </div>
      <div className="gender-details-box"/>
        <span className="gender-title">Gender</span>
        <div className="gender-category"/>
          <input type="radio" name="gender" id="male"/>
          <label for="male">Male</label>
          <input type="radio" name="gender" id="female"/>
          <label for="female">Female</label>
          <input type="radio" name="gender" id="other"/>
          <label for="other">Other</label>
        <div/>
      <div>
      <div className="form-submit-btn">
        <input type="submit" value="Register"/>
      </div>
    <form/>
  </div>
  </div>
  );
};

