import React, { useState } from "react";
import { updateAccount } from "../../modules/crud/updateAccount";

export function UpdateAccountForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

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

              <div className="input-group" data-bs-theme="dark">
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
            <div className="col-1 d-flex align-items-center">
              <button type="submit" className="btn btn-warning btn-sm">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
