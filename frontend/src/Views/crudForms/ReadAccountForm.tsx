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
    <>
      <form className="form-control api-inputs input-group mb-2" data-bs-theme="dark" onSubmit={handleSubmit}>
        <h2>Show User</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <button type="submit">Show</button>
        <p>{responseMessage}</p>
      </form>
    </>
  );
}
