import axios from "axios";
import React, { useState } from "react";
import { createAccount } from "../../modules/crud/createAccount";

export function CreateAccountForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [readResponse, setReadResponse] = useState<string>("");
  const baseUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const account = { email, password, name, phone };

    const result = await createAccount(account);

    if (result.status === 400) {
      return setResponseMessage("Please fill out all fields before submitting.");
    }

    if (result.status === 409) {
      return setResponseMessage(`User ${email} already exists.`);
    }

    if (result.status === 200) {
      setResponseMessage(`User ${email} created successfully`);

      const readUrl = `${baseUrl}/readUser?email=${email}`;
      const readUrlResponse = await axios.get(readUrl);
      setReadResponse(JSON.stringify(readUrlResponse.data));
    } else {
      setResponseMessage("User wasn't created.");
    }
  }

  return (
    <div className="container">
      <div className="row crud-forms d-flex align-items-center p-4">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="email"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="create user email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control api-inputs"
                  aria-label="create user password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Name"
                  aria-label="create user name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Phone"
                  aria-label="create user phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </fieldset>

            <button type="submit" className="btn btn-success btn-sm">
              Create
            </button>
          </form>
        </div>
        <div className="col-7 d-flex align-items-center">
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
