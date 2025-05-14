import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";
import { readAccount } from "../../modules/crud/readAccount";
import {
  selectSignInDidMount,
  selectSignInEmail,
  selectSignInError,
  selectSignInIsSignedIn,
  selectSignInPassword,
  selectSignInShowModal,
} from "../../redux/stateSelectors";

export function LoginModal() {
  //declares Redux
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const signInModal = useSelector(selectSignInShowModal);
  const email = useSelector(selectSignInEmail);
  const password = useSelector(selectSignInPassword);
  const errorResponse = useSelector(selectSignInError);

  //invokes useDispatch
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  //sets modal visibility to true upon page load via componentDidMount
  function componentDidMount(): void {
    handleOpenModal();
  }
  function handleOpenModal() {
    const didMount = set.signInDidMount(true);
    dispatch(didMount);
    const showSignInModal = set.signInShowModal(true);
    dispatch(showSignInModal);
  }
  //closes modal on close button click, clears sign in redux variables
  function handleCloseModal() {
    const closeSignInModal = set.signInShowModal(false);
    dispatch(closeSignInModal);
    const clearEmail = set.signInEmail("");
    dispatch(clearEmail);
    const clearPassword = set.signInPassword("");
    dispatch(clearPassword);
    const clearError = set.signInError("");
    dispatch(clearError);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    //condition to make sure fields are filled out
    if (!email || !password) {
      const setErrorResponse = set.signInError("Email and password must be filled out");
      return dispatch(setErrorResponse);
    }

    //read request to check if user exists via status code
    const result = await readAccount({ email, password, name: "", phone: "" });

    if (result.status !== 200) {
      const setErrorResponse = set.signInError("User not found");
      return dispatch(setErrorResponse);
    }

    //if user exists, signs in, saves authorized user email, and closes login modal
    const currentLoginState = set.signInIsSignedIn(true);
    dispatch(currentLoginState);
    const saveEmail = set.authUserEmail(email);
    dispatch(saveEmail);
    const savePassword = set.authUserPassword(password);
    dispatch(savePassword);
    const closeModal = set.signInShowModal(false);
    dispatch(closeModal);
    const showUpdateAccountModal = set.updateShowModal(true);
    dispatch(showUpdateAccountModal);
  }

  function showCreateAccountModal(event: React.FormEvent) {
    event.preventDefault();
    const hideLoginModal = set.signInShowModal(false);
    dispatch(hideLoginModal);
    const showCreateAccountModal = set.createShowModal(true);
    dispatch(showCreateAccountModal);
  }
  function showUpdateAccountModal(event: React.FormEvent) {
    event.preventDefault();
    const hideLoginModal = set.signInShowModal(false);
    dispatch(hideLoginModal);
    const showUpdateAccountModal = set.updateShowModal(true);
    dispatch(showUpdateAccountModal);
  }

  return (
    <>
      {signInModal && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div
            className="modal-dialog 
           modal-dialog-centered mx-auto"
            style={{ width: "350px" }}
            data-bs-theme="dark"
          >
            <div className="modal-content mx-auto bg-dark text-white border rounded-0">
              <div className="modal-header d-flex justify-content-center">
                <div className=" modal-title" style={{ width: "95%" }}>
                  <div className="mb-1 pt-2" style={{ fontSize: "13px", color: "rgba(156, 156, 156, 0.7)" }}>
                    Please enter your details{" "}
                  </div>{" "}
                  <h2> Welcome Back</h2>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="d-flex justify-content-center">
                    <input
                      type="email"
                      className="form-control my-1"
                      data-bs-theme="dark"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        const action = set.signInEmail(e.target.value);
                        dispatch(action);
                      }}
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="password"
                      className="form-control mb-1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        const action = set.signInPassword(e.target.value);
                        dispatch(action);
                      }}
                      style={{ width: "95%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div
                      style={{ minHeight: "1.35rem", fontSize: ".85rem", width: "95%" }}
                      className="text-danger text-center fw-bold"
                    >
                      {" "}
                      {errorResponse}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-sm modal-button-style" style={{ width: "95%" }}>
                      Log In
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button onClick={handleCloseModal} className="btn btn-secondary btn-sm" style={{ width: "95%" }}>
                      Close
                    </button>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="mx-auto" style={{ fontSize: "13px", color: "rgba(156, 156, 156, 0.7)" }}>
                    Don't have an account yet?{" "}
                    <a href="#" className="text-decoration-none" onClick={showCreateAccountModal}>
                      Sign Up
                    </a>{" "}
                  </div>
                  <div className="mx-auto" style={{ fontSize: "13px", color: "rgba(156, 156, 156, 0.7)" }}>
                    Need to make changes?{" "}
                    <a href="#" className="text-decoration-none" onClick={showUpdateAccountModal}>
                      Update Account
                    </a>{" "}
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
