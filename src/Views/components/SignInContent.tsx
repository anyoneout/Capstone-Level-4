import React from "react";
import "./SignInContent.scss";

export default function SignInContent() {
  return (
    <fieldset className="signInContentFieldset">
      <div className="input-container">
        <input
          className="input-style"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="input-style"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
    </fieldset>
  );
}
