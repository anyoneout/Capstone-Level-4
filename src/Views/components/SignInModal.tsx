import React from "react";
import SignInContent from "./SignInContent";
import { handleSignInAttempt } from "../../controllers/handleSignInAttempt";
import "./SignInOutModal.scss";
import "./SignInArea.scss";

export default function SignInModal(props) {
  const onSignIn = props.onSignIn;
  const closeButton = props.closeButton;

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="modal fade show d-block d-flex align-items-center justify-content-center"
        id="signInModal"
        tabIndex={-1}
        aria-labelledby="signInModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h1 className="modal-title" id="signInModalLabel">
                Sign In
              </h1>
            </div>
            <div className="modal-body">
              <SignInContent />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary modal-sign-in-btn"
                data-bs-dismiss="modal"
              >
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-secondary modal-close-button"
                onClick={closeButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  async function handleSubmit(event: any) {
    event.preventDefault();
    const isAuthenticated = await handleSignInAttempt(event, onSignIn);

    if (isAuthenticated) {
      onSignIn();
    } else {
      console.log("authentication failed");
    }
  }
}
