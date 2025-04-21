import axios from "axios";
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
    <>
      <form className="form-control api-inputs input-group mb-2" data-bs-theme="dark" onSubmit={handleSubmit}>
        <h2>Delete User</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="submit">Delete</button>
        <p>{responseMessage}</p>
      </form>
    </>
  );
}
