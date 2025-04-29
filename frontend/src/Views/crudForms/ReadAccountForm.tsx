import React, { useState } from "react";
import { readAccount } from "../../modules/crud/readAccount";
import { selectReadEmail, selectReadResponseMessage } from "../../redux/stateSelectors";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";

export function ReadAccountForm() {
  const email = useSelector(selectReadEmail);
  const responseMessage = useSelector(selectReadResponseMessage);

  const dispatch = useDispatch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await readAccount({ email, password: "", name: "", phone: "" });

    if (response.status === 200) {
      dispatch(set.readResponseMessage(`User (${email}) was found`));
    } else {
      dispatch(set.readResponseMessage("user missing"));
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
                  onChange={(e) => dispatch(set.readEmail(e.target.value))}
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
