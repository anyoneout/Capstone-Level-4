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
      <div className="row crud-forms d-flex align-items-center p-4">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="input-group" data-bs-theme="dark">
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
            <div className="col-1 d-flex align-items-center">
              <button type="submit" className="btn btn-primary btn-sm">
                Read
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
