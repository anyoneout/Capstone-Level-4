import React from "react";
import { readAccount } from "../../modules/crud/readAccount";
import { selectReadEmail, selectReadPassword, selectReadResponseMessage } from "../../redux/stateSelectors";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";
import { Account } from "../../types/Account";

export function ReadAccountForm() {
  const email = useSelector(selectReadEmail);
  const password = useSelector(selectReadPassword);
  const responseMessage = useSelector(selectReadResponseMessage);

  const dispatch = useDispatch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await readAccount({ email, password, name: "", phone: "", hfToken: "", oaToken: "" } as Account);
    console.log("read account form response", response);
    if ("status" in response) {
      const action = set.readResponseMessage(`user missing`);
      return dispatch(action);
    } else {
      const action = set.readResponseMessage(`User (${email}) was found`);
      return dispatch(action);
    }
  }

  return (
    <div className="container mb-2">
      <div className="row crud-forms d-flex align-items-center p-4">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <fieldset className="mb-1">
              <div className="input-group" data-bs-theme="dark">
                <input
                  type="email"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="user email"
                  value={email}
                  onChange={(e) => dispatch(set.readEmail(e.target.value))}
                />
              </div>
              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control api-inputs"
                  aria-label="user password"
                  value={password}
                  onChange={(e) => dispatch(set.readPassword(e.target.value))}
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
