import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInIsSignedIn, selectSignInShowModal } from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { LoginModal } from "../loginModals/LoginModal";

export default function SignInAreaUpdate() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showModal = useSelector(selectSignInShowModal);
  const dispatch = useDispatch();

  //shows signInModal
  function handleSignIn(): void {
    dispatch(set.signInShowModal(true));
  }

  //clears authorized user email and signs out
  function handleSignOut(): void {
    dispatch(set.authUserEmail(""));
    dispatch(set.signInIsSignedIn(false));
  }

  return (
    <>
      <li className="nav-item">
        <button
          //this seemed like a small amount of logic to have in the jsx so I didn't bother creating functions that conditionally rendered for the onClick"
          className={isSignedIn ? "sign-out-btn" : "sign-in-btn"}
          onClick={isSignedIn ? handleSignOut : handleSignIn}
        >
          {isSignedIn ? "Sign Out" : "Sign In"}
        </button>
      </li>
      {showModal && <LoginModal />}
    </>
  );
}
