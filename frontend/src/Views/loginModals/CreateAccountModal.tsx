import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthUserIsSignedIn,
  selectCreateResponseMessage,
  selectCreateShowModal,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { createAccount } from "../../modules/crud/createAccount";
import { savePersistentLogin } from "../../modules/savePersistentLogin";

export function CreateAccountModal() {
  const isSignedIn = useSelector(selectAuthUserIsSignedIn);
  const showCreateModal = useSelector(selectCreateShowModal);
  const responseMessage = useSelector(selectCreateResponseMessage);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  //sets modal visibility to true upon page load via componentDidMount
  function componentDidMount(): void {
    const didMount = set.createDidMount(true);
    dispatch(didMount);
  }

  function handleOpenModal() {
    /*     const showCreateModal = set.createShowModal(true);
    dispatch(showCreateModal); */
  }

  function handleCloseModal() {
    const didUnMount = set.createDidMount(false);
    dispatch(didUnMount);
    const closeUpdateModal = set.createShowModal(false);
    dispatch(closeUpdateModal);
    const clearError = set.createResponseMessage("");
    dispatch(clearError);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target;
    const email = form[0].value;
    const password = form[1].value;
    const name = form[2].value;
    const phone = form[3].value;
    const hfToken = form[4].value;
    const oaToken = form[5].value;

    const account = { email, password, name, phone, hfToken, oaToken };

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
      const currentLoginState = set.signInIsSignedIn(true);
      dispatch(currentLoginState);
      const didMount = set.createDidMount(false);
      dispatch(didMount);
      const clearError = set.createResponseMessage("");
      dispatch(clearError);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("email", email);
      localStorage.setItem("hfToken", hfToken);
      localStorage.setItem("oaToken", oaToken);
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      localStorage.setItem("phone", phone);
      savePersistentLogin(email, password);

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
      {showCreateModal && (
        <div
          className="modal fade show"
          id="createAccountModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered mx-auto" style={{ width: "340px" }} data-bs-theme="dark">
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
                      className="form-control my-1"
                      placeholder="Email"
                      name="email"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="password"
                      className="form-control mb-1"
                      placeholder="Password"
                      name="password"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control my-1"
                      placeholder="Name"
                      name="name"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="tel"
                      className="form-control mb-1"
                      placeholder="Phone"
                      name="phone"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control my-1"
                      placeholder="Hugging Face token"
                      name="hfToken"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Open AI token"
                      name="oaToken"
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
