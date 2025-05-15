import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreateShowModal,
  selectProfileShowModal,
  selectSignInDidMount,
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
import { AccountProfileModal } from "../loginModals/AccountProfileModal";

export default function SignInAreaUpdate() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showLoginModal = useSelector(selectSignInShowModal);
  const showCreateModal = useSelector(selectCreateShowModal);
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const showAccountModal = useSelector(selectProfileShowModal);
  const didMount = useSelector(selectSignInDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  function componentDidMount() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const email = localStorage.getItem("loggedInEmail") || "";
    const password = localStorage.getItem("loggedInPassword") || "";

    if (isLoggedIn) {
      const isSignedIn = set.signInIsSignedIn(true);
      dispatch(isSignedIn);
      const authEmail = set.authUserEmail(email);
      dispatch(authEmail);
      const authPassword = set.authUserPassword(password);
      dispatch(authPassword);
    }
    const signInAreaDidMount = set.signInDidMount(true);
    dispatch(signInAreaDidMount);
  }

  //shows signInModal
  function handleSignIn(): void {
    const action = set.signInShowModal(true);
    dispatch(action);
  }

  //clears authorized user email and signs out
  function handleSignOut(): void {
    const clearIsSignedIn = set.signInIsSignedIn(false);
    dispatch(clearIsSignedIn);
    localStorage.setItem("loggedIn", "false");
    const clearAuthUserEmail = set.authUserEmail("");
    dispatch(clearAuthUserEmail);
    localStorage.setItem("loggedInEmail", "");
    const clearAuthUserPassword = set.authUserPassword("");
    dispatch(clearAuthUserPassword);
    localStorage.setItem("loggedInPassword", "");
    localStorage.removeItem("LoggedInPassword");
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
      {showAccountModal && <AccountProfileModal />}
    </>
  );
}
