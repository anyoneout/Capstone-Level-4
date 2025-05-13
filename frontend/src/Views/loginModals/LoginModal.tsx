import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";
import { readAccount } from "../../modules/crud/readAccount";
import {
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
  function handleOpenModal() {
    const showSignInModal = set.signInShowModal(true);
    dispatch(showSignInModal);
  }
  function componentDidMount(): void {
    handleOpenModal();
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
    const closeModal = set.signInShowModal(false);
    dispatch(closeModal);
  }

  return (
    <>
      {signInModal && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div
            className="modal-dialog 
           modal-dialog-centered mx-auto"
          >
            <div className="modal-content mx-auto bg-dark text-white border rounded-0">
              <div className="modal-header">
                <div className=" modal-title">
                  <div className="mb-2" style={{ fontSize: "13px", color: "rgba(156, 156, 156, 0.7)" }}>
                    Please enter your details{" "}
                  </div>{" "}
                  <h3> Welcome Back</h3>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      const action = set.signInEmail(e.target.value);
                      dispatch(action);
                    }}
                  />
                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      const action = set.signInPassword(e.target.value);
                      dispatch(action);
                    }}
                  />
                  <div style={{ minHeight: "1.35rem", fontSize: ".85rem" }} className="mt-1 text-danger">
                    {" "}
                    {errorResponse}
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary mt-2  w-100 btn-sm">
                      Log In
                    </button>
                  </div>
                  <div>
                    <button onClick={handleCloseModal} className="btn btn-secondary mt-2 w-100 btn-sm">
                      Close
                    </button>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="mb-2 mx-auto" style={{ fontSize: "13px", color: "rgba(156, 156, 156, 0.7)" }}>
                    Don't have an account yet?{" "}
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
