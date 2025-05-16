import React from "react";
import { createAccount } from "../../modules/crud/createAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreateEmail,
  selectCreateName,
  selectCreatePassword,
  selectCreatePhone,
  selectCreateResponseMessage,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";

export function CreateAccountForm() {
  //redux
  const email = useSelector(selectCreateEmail);
  const password = useSelector(selectCreatePassword);
  const responseMessage = useSelector(selectCreateResponseMessage);
  const name = useSelector(selectCreateName);
  const phone = useSelector(selectCreatePhone);

  const dispatch = useDispatch();

  //run locally or remotely
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const account = { email, password, name, phone };

    const result = await createAccount(account);
    console.log("create account form response", result);
    if (result.status === 400) {
      const action = set.createResponseMessage("Please fill out all fields before submitting.");
      return dispatch(action);
    }

    if (result.status === 409) {
      const action = set.createResponseMessage(`User ${email} already exists.`);
      return dispatch(action);
    }

    if (result.status === 200) {
      const action = set.createResponseMessage(`User ${email} created successfully`);
      return dispatch(action);
    } else {
      const action = set.createResponseMessage(`User wasn't created`);
      return dispatch(action);
    }
  }

  return (
    <div className="container mb-2">
      <div className="row crud-forms d-flex align-items-center p-4">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <fieldset className="mb-1">
              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="email"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="create user email"
                  value={email}
                  onChange={(e) => dispatch(set.createEmail(e.target.value))}
                />
              </div>

              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control api-inputs"
                  aria-label="create user password"
                  value={password}
                  onChange={(e) => dispatch(set.createPassword(e.target.value))}
                />
              </div>

              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Name"
                  aria-label="create user name"
                  value={name}
                  onChange={(e) => dispatch(set.createName(e.target.value))}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Phone"
                  aria-label="create user phone"
                  value={phone}
                  onChange={(e) => dispatch(set.createPhone(e.target.value))}
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
