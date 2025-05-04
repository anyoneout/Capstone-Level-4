import React, { useEffect } from "react";
import SignInModal from "./SignInModal";
import SignOutModal from "./SignOutModal";
import "./CollapsibleNavbar.scss";
import "./SignInArea.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignInButtonClass,
  selectSignInButtonText,
  selectSignInDidMount,
  selectSignInIsSignedIn,
  selectSignInShowModal,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";

export default function SignInArea() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const didMount = useSelector(selectSignInDidMount);
  const buttonText = useSelector(selectSignInButtonText);
  const buttonClass = useSelector(selectSignInButtonClass);
  const showModal = useSelector(selectSignInShowModal);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []); // Runs once when component mounts
  useEffect(componentDidUpdate, [isSignedIn]); // Runs when isSignedIn state changes

  return (
    <>
      {/* Navigation Button for Sign In/Out */}
      <li className="nav-item">
        <button className={buttonClass} onClick={isSignedIn ? handleSignOut : handleSignIn}>
          {buttonText}
        </button>
      </li>

      {/* Conditionally Render Sign-In Modal */}
      {showModal === "signIn" && (
        <SignInModal className="modal-width" onSignIn={handleSubmitCloseSignIn} closeButton={handleCloseSignIn} />
      )}

      {/* Conditionally Render Sign-Out Modal */}
      {showModal === "signOut" && (
        <SignOutModal onSignOut={handleSubmitCloseSignOut} closeButton={handleCloseSignOut} />
      )}
    </>
  );

  // Runs only when the component is first mounted
  function componentDidMount(): void {
    const action = set.signInDidMount(true);
    dispatch(action);

    console.log("SignInArea Mounted");
  }

  // Runs when isSignedIn state changes
  function componentDidUpdate(): void {
    if (didMount) {
      console.log("SignInArea Updated");

      // Update button text and style based on sign-in status
      if (isSignedIn) {
        const action = set.signInButtonText("Sign Out");
        dispatch(action);
        const classAction = set.signInButtonClass("sign-out-btn");
        dispatch(classAction);
      } else {
        const action = set.signInButtonText("Sign In");
        dispatch(action);
        const classAction = set.signInButtonClass("sign-in-btn");
        dispatch(classAction);
      }
    }
  }

  // Handles the sign-in button click.
  // Opens the Sign-In Modal and adds a backdrop.

  function handleSignIn(): void {
    console.log("User is signing in...");
    const action = set.signInShowModal("signIn");
    dispatch(action);
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
  }

  // Closes the Sign-In Modal and removes the backdrop.

  function handleCloseSignIn(): void {
    console.log("Closing Sign-In Modal...");
    const action = set.signInShowModal(null);
    dispatch(action);
    removeBackdrop();
  }

  // Handles sign-in submission
  //  Marks the user as signed in and closes the modal

  function handleSubmitCloseSignIn(): void {
    console.log("Closing Sign-In Modal...");
    const actionSignedIn = set.signInIsSignedIn(true);
    dispatch(actionSignedIn);
    const action = set.signInShowModal(null);
    dispatch(action);
    removeBackdrop();
  }

  // Handles the sign-out button click
  // Opens the Sign-Out Modal and adds a backdrop

  function handleSignOut(): void {
    console.log("User is signing out...");
    const action = set.signInShowModal("signOut");
    dispatch(action);
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
  }

  // Closes the Sign-Out Modal and removes the backdrop

  function handleCloseSignOut(): void {
    console.log("Closing Sign-Out Modal...");
    const action = set.signInShowModal(null);
    dispatch(action);
    removeBackdrop();
  }

  // Handles sign-out
  // Marks the user as signed out and closes the modal.

  function handleSubmitCloseSignOut(): void {
    console.log("Closing Sign-Out Modal...");
    const actionSignedIn = set.signInIsSignedIn(false);
    dispatch(actionSignedIn);
    const action = set.signInShowModal(null);
    dispatch(action);
    removeBackdrop();
  }

  // Removes the modal backdrop after a delay.

  function removeBackdrop(): void {
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.classList.remove("show");
      setTimeout(() => backdrop.remove(), 300);
    }
  }
}
