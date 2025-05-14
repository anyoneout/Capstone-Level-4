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
    debugger;
  }

  //clears authorized user email and signs out
  function handleSignOut(): void {
    dispatch(set.authUserEmail(""));
    dispatch(set.signInIsSignedIn(false));
  }
  const label = isSignedIn ? "Sign Out" : "Sign In";
  const handler = isSignedIn ? handleSignOut : handleSignIn;
  const buttonStyle = isSignedIn ? "sign-out-btn" : "sign-in-btn";

  return (
    <>
      <li className="nav-item">
        <button className={buttonStyle} onClick={handler}>
          {label}
        </button>
      </li>
      {showModal && <LoginModal />}
    </>
  );
}
