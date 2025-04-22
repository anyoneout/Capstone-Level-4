import axios from "axios";
import React, { useState } from "react";
import { updateAccount } from "../../modules/crud/updateAccount";

export function UpdateAccountForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const baseUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await updateAccount({ email, password, name: "", phone: "" });

    if (response.status === 200) {
      setResponseMessage(`user (${email}) updated successfully`);
    } else {
      setResponseMessage("user wasn't updated");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Update user</legend>

              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="email"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="create user email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control api-inputs"
                  aria-label="create user password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </fieldset>

            <button type="submit">Update</button>
            <p>{responseMessage}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
