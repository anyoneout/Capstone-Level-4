import React, { useEffect, useState } from "react";
import SignInModal from "./SignInModal";
import SignOutModal from "./SignOutModal";
import "./CollapsibleNavbar.scss";
import "./SignInArea.scss";

export default function SignInArea() {
  // State variables to manage user sign-in status and UI updates
  const [isSignedIn, setIsSignedIn] = useState(false); // Tracks if user is signed in
  const [didMount, setDidMount] = useState(false); // Tracks if component has mounted
  const [buttonText, setButtonText] = useState("Sign In"); // Controls button text
  const [buttonClass, setButtonClass] = useState("sign-in-btn"); // Controls button style
  const [showModal, setShowModal] = useState(null); // Tracks which modal is displayed


  useEffect(componentDidMount, []); // Runs once when component mounts
  useEffect(componentDidUpdate, [isSignedIn]); // Runs when isSignedIn state changes

  return (
    <>
      {/* Navigation Button for Sign In/Out */}
      <li className="nav-item">
        <button
          className={buttonClass}
          onClick={isSignedIn ? handleSignOut : handleSignIn}
        >
          {buttonText}
        </button>
      </li>

      {/* Conditionally Render Sign-In Modal */}
      {showModal === "signIn" && <SignInModal
        className="modal-width"
        onSignIn={handleSubmitCloseSignIn}
        closeButton={handleCloseSignIn} />}

      {/* Conditionally Render Sign-Out Modal */}
      {showModal === "signOut" && <SignOutModal
        onSignOut={handleSubmitCloseSignOut}
        closeButton={handleCloseSignOut} />}
    </>
  );

  // Runs only when the component is first mounted
  function componentDidMount() {
    setDidMount(true);
    console.log("SignInArea Mounted");
  }

  // Runs when isSignedIn state changes
  function componentDidUpdate() {
    if (didMount) {
      console.log("SignInArea Updated");

      // Update button text and style based on sign-in status
      if (isSignedIn) {
        setButtonText("Sign Out");
        setButtonClass("sign-out-btn");
      } else {
        setButtonText("Sign In");
        setButtonClass("sign-in-btn");
      }
    }
  }


  // Handles the sign-in button click.
  // Opens the Sign-In Modal and adds a backdrop.

  function handleSignIn() {
    console.log("User is signing in...");
    setShowModal("signIn");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
  }


  // Closes the Sign-In Modal and removes the backdrop.

  function handleCloseSignIn() {
    console.log("Closing Sign-In Modal...");
    setShowModal(null);
    removeBackdrop();
  }


  // Handles sign-in submission
  //  Marks the user as signed in and closes the modal

  function handleSubmitCloseSignIn() {
    console.log("Closing Sign-In Modal...");
    setIsSignedIn(true);
    setShowModal(null);
    removeBackdrop();
  }


  // Handles the sign-out button click
  // Opens the Sign-Out Modal and adds a backdrop

  function handleSignOut() {
    console.log("User is signing out...");
    setShowModal("signOut");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
  }


  // Closes the Sign-Out Modal and removes the backdrop

  function handleCloseSignOut() {
    console.log("Closing Sign-Out Modal...");
    setShowModal(null);
    removeBackdrop();
  }


  // Handles sign-out
  // Marks the user as signed out and closes the modal.

  function handleSubmitCloseSignOut() {
    console.log("Closing Sign-Out Modal...");
    setIsSignedIn(false);
    setShowModal(null);
    removeBackdrop();
  }


  // Removes the modal backdrop after a delay.

  function removeBackdrop() {
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.classList.remove("show");
      setTimeout(() => backdrop.remove(), 300);
    }
  }
}
