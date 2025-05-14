import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreateShowModal,
  selectSignInIsSignedIn,
  selectSignInShowModal,
  selectUpdateShowModal,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { LoginModal } from "../loginModals/LoginModal";
import { CreateAccountModal } from "../loginModals/CreateAccountModal";
import { UpdateAccountModal } from "../loginModals/UpdateAccountModal";
import "./CollapsibleNavbar.scss";
import "./SignInArea.scss";

export default function SignInAreaUpdate() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showLoginModal = useSelector(selectSignInShowModal);
  const showCreateModal = useSelector(selectCreateShowModal);
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const dispatch = useDispatch();

  //shows signInModal
  function handleSignIn(): void {
    const action = set.signInShowModal(true);
    dispatch(action);
  }

  //clears authorized user email and signs out
  function handleSignOut(): void {
    const clearAuthUserEmail = set.authUserEmail("");
    dispatch(clearAuthUserEmail);
    const clearIsSignedIn = set.signInIsSignedIn(false);
    dispatch(clearIsSignedIn);
  }
  const label = isSignedIn ? "Sign Out" : "Sign In";
  const handler = isSignedIn ? handleSignOut : handleSignIn;
  const buttonStyle = isSignedIn ? "sign-out-btn" : "sign-in-btn";

  return (
    <>
      <li className="nav-item">
        <button className={buttonStyle} style={{ width: "120px", textAlign: "center" }} onClick={handler}>
          {label}
        </button>
      </li>
      {showLoginModal && <LoginModal />}
      {showCreateModal && <CreateAccountModal />}
      {showUpdateModal && <UpdateAccountModal />}
    </>
  );
}
