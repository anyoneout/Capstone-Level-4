import React, { useState } from "react";
import { deleteAccount } from "../../modules/crud/deleteAccount";

export function DeleteAccountForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await deleteAccount({ email, password, name: "", phone: "" });

    if (response.status === 401) {
      return setResponseMessage(`Invalid password entered`);
    }

    if (response.status === 200) {
      setResponseMessage(`user (${email}) deleted successfully`);
    } else {
      setResponseMessage("user wasn't deleted");
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

            <button type="submit" className="btn btn-danger btn-sm">
              Delete
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
