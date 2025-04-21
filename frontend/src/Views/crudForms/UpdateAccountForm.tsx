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
    <form className="form-control api-inputs input-group mb-2" data-bs-theme="dark" onSubmit={handleSubmit}>
      <h2>Update User</h2>
      <label>Email (required)</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <label>Password </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Update</button>
      <p>{responseMessage}</p>
    </form>
  );
}
