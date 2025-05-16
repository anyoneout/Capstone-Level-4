import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreateEmail,
  selectCreateIsSignedIn,
  selectCreateName,
  selectCreatePassword,
  selectCreatePhone,
  selectCreateResponseMessage,
  selectCreateShowModal,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";
/* import { readAccount } from "../../modules/crud/readAccount"; */
import { createAccount } from "../../modules/crud/createAccount";
/* import { AccountProfileModal } from "./AccountProfileModal"; */

export function CreateAccountModal() {
  const isSignedIn = useSelector(selectCreateIsSignedIn);
  const showModal = useSelector(selectCreateShowModal);
  const responseMessage = useSelector(selectCreateResponseMessage);
  const email = useSelector(selectCreateEmail);
  const password = useSelector(selectCreatePassword);
  const name = useSelector(selectCreateName);
  const phone = useSelector(selectCreatePhone);

  const dispatch = useDispatch();

  function handleCloseModal() {
    const clearEmail = set.createEmail("");
    dispatch(clearEmail);
    const clearPassword = set.createPassword("");
    dispatch(clearPassword);
    const clearName = set.createName("");
    dispatch(clearName);
    const clearPhone = set.createPhone("");
    dispatch(clearPhone);
    const clearError = set.createResponseMessage("");
    dispatch(clearError);
    const closeUpdateModal = set.createShowModal(false);
    dispatch(closeUpdateModal);
    const showProfileModal = set.accountProfileShowModal(true);
    dispatch(showProfileModal);
  }

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

    if (!email || !password || !name || !phone) {
      const setErrorResponse = set.createResponseMessage("All fields must be filled out");
      return dispatch(setErrorResponse);
    }
    const result = await createAccount(account);
    console.log("create account form response", result);

    if (result.status === 400) {
      const action = set.createResponseMessage("Please fill out all fields before submitting.");
      return dispatch(action);
    }

    if (result.status === 409) {
      const action = set.createResponseMessage(`User already exists.`);
      return dispatch(action);
    }

    if (result.status === 200) {
      const action = set.createResponseMessage(`User created successfully!`);
      const loggedIn = set.authIsLoggedIn(true);
      dispatch(loggedIn);
      const saveEmail = set.authUserEmail(email);
      dispatch(saveEmail);
      const savePassword = set.authUserPassword(password);
      dispatch(savePassword);
      const currentLoginState = set.signInIsSignedIn(true);
      dispatch(currentLoginState);
      const userEmail = set.authUserEmail(email);
      dispatch(userEmail);
      const closeModal = set.createShowModal(false);
      dispatch(closeModal);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("loggedInEmail", email);
      localStorage.setItem("loggedInPassword", password);
      return dispatch(action);
    } else {
      const action = set.createResponseMessage(`User wasn't created`);
      return dispatch(action);
    }
  }

  if (isSignedIn) {
    return <></>;
  }

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          id="createAccountModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered mx-auto" style={{ width: "350px" }} data-bs-theme="dark">
            <div className="modal-content mx-auto bg-dark text-white border rounded-0">
              <div className="modal-header d-flex justify-content-center">
                <h2 className="modal-title mb-3 mt-2" style={{ width: "95%" }}>
                  Sign up
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body d-flex justify-content-center">
                  <div className="d-flex justify-content-center">
                    <input
                      type="email"
                      className="form-control mb-1"
                      placeholder="Email"
                      aria-label="create user email "
                      value={email}
                      onChange={(e) => dispatch(set.createEmail(e.target.value))}
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      placeholder="Password"
                      className="form-control mb-1"
                      aria-label="create user password"
                      value={password}
                      onChange={(e) => dispatch(set.createPassword(e.target.value))}
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Name"
                      aria-label="create user name"
                      value={name}
                      onChange={(e) => dispatch(set.createName(e.target.value))}
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Phone"
                      aria-label="create user phone"
                      value={phone}
                      onChange={(e) => dispatch(set.createPhone(e.target.value))}
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div style={{ minHeight: "1.35rem", fontSize: ".85rem" }} className="text-danger text-center fw-bold">
                    {" "}
                    {responseMessage}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="mx-auto btn btn-sm modal-button-style" style={{ width: "95%" }}>
                      Create
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button onClick={handleCloseModal} className="btn btn-secondary btn-sm" style={{ width: "95%" }}>
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
