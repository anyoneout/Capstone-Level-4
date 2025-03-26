import React from "react";
import "./SignInOutModal.scss";

export default function SignOutModal(props) {
  const onSignOut = props.onSignOut;
  const closeButton = props.closeButton;
  return (
    <form
      onSubmit={handleSubmit}
      className="modal fade show d-block d-flex align-items-center justify-content-center"
      id="signOutModal"
      tabIndex={-1}
      aria-labelledby="signOutModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center">
            <h1>Sign Out</h1>
          </div>
          <div className="modal-body">Are you sure you want to sign out?</div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-warning modal-btn-warning"
              data-bs-dismiss="modal"
            >
              Sign Out
            </button>
            <button
              type="button"
              className="btn btn-secondary modal-btn-secondary"
              onClick={closeButton}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </form>
  );
  function handleSubmit(event: any): void {
    event.preventDefault();
    console.log("Module has signed out");
    onSignOut();
  }
}
