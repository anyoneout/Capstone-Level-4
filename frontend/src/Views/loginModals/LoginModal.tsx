import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";
import { readAccount } from "../../modules/crud/readAccount";
import { selectSignInDidMount, selectSignInError, selectSignInShowModal } from "../../redux/stateSelectors";
import { savePersistentLogin } from "../../modules/savePersistentLogin";

export function LoginModal() {
  //declares Redux
  const didMount = useSelector(selectSignInDidMount);
  const showSignInModal = useSelector(selectSignInShowModal);
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
    const didUnMount = set.signInDidMount(false);
    dispatch(didUnMount);
    const clearError = set.signInError("");
    dispatch(clearError);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target;
    const email = form[0].value;
    const password = form[1].value;
    //condition to make sure fields are filled out
    if (!email || !password) {
      const setErrorResponse = set.signInError("Email and password must be filled out");
      return dispatch(setErrorResponse);
    }

    //read request to check if user exists via status code
    const result = await readAccount({ email, password, name: "", phone: "", hfToken: "", oaToken: "" });
    //I needed a way to check whether a status code or an Account were being returned and this seemed to be the most simple way to do it
    if ("status" in result) {
      if (result.status === 400) {
        const setErrorResponse = set.signInError("Input format is invalid.");
        return dispatch(setErrorResponse);
      }
      if (result.status === 404) {
        const setErrorResponse = set.signInError("User not found");
        return dispatch(setErrorResponse);
      }
    } else {
      console.log(result);
      //if user exists, signs in, saves authorized user email, password, sets localstorage, and closes login modal
      const currentLoginState = set.signInIsSignedIn(true);
      dispatch(currentLoginState);
      const currentLoginError = set.signInError("");
      dispatch(currentLoginError);
      const authUserLoginState = set.authUserIsSignedIn(true);
      dispatch(authUserLoginState);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("email", result.email);
      localStorage.setItem("password", result.password);
      localStorage.setItem("name", result.name);
      localStorage.setItem("phone", result.phone);
      localStorage.setItem("hfToken", result.hfToken);
      localStorage.setItem("oaToken", result.oaToken);
      savePersistentLogin(email, password);
      const didUnMount = set.signInDidMount(false);
      dispatch(didUnMount);
      const closeModal = set.signInShowModal(false);
      dispatch(closeModal);
    }
  }

  function showCreateAccountModal(event: React.FormEvent) {
    event.preventDefault();
    const hideLoginModal = set.signInShowModal(false);
    dispatch(hideLoginModal);
    const didUnMount = set.signInDidMount(false);
    dispatch(didUnMount);
    const showCreateAccountModal = set.createShowModal(true);
    dispatch(showCreateAccountModal);
  }
  /*   function showUpdateAccountModal(event: React.FormEvent) {
    event.preventDefault();
    const hideLoginModal = set.signInShowModal(false);
    dispatch(hideLoginModal);
    const showUpdateAccountModal = set.updateShowModal(true);
    dispatch(showUpdateAccountModal);
  } */

  return (
    <>
      {showSignInModal && (
        <div
          className="modal fade show"
          id="loginModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div
            className="modal-dialog 
           modal-dialog-centered mx-auto"
            style={{ width: "340px" }}
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
                <div className="modal-body" data-bs-theme="dark">
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
                  {/*    <div className="mx-auto" style={{ fontSize: "13px", color: "rgba(156, 156, 156, 0.7)" }}>
                    Need to make changes?{" "}
                    <a href="#" className="text-decoration-none" onClick={showUpdateAccountModal}>
                      Update Account
                    </a>{" "}
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
