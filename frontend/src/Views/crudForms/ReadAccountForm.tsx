import axios from "axios";
import React, { useState } from "react";
import { readAccount } from "../../modules/crud/readAccount";

export function ReadAccountForm() {
  const [email, setEmail] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await readAccount({ email, password: "", name: "", phone: "" });

    if (response.status === 200) {
      setResponseMessage(`User (${email}) was found`);
    } else {
      setResponseMessage("user missing");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Read user</legend>

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
            </fieldset>

            <button type="submit">Read</button>
            <p>{responseMessage}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
