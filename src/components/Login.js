import React from "react";
import "./login.css";

export default function Login() {
  return (
    <form className="form">
      {/* email */}
      <div className="email">
        <label className="email-label">Email</label>
        <input type="email"></input>
      </div>
      {/* password */}
      <div className="password">
        <label className="password-label">Password</label>
        <input type="password"></input>
      </div>
      <button>Login</button>
    </form>
  );
}
