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
import { readAccount } from "../../modules/crud/readAccount";
import { Credentials } from "../../types/Credentials";

export default function SignInAreaUpdate() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showLoginModal = useSelector(selectSignInShowModal);
  const showCreateModal = useSelector(selectCreateShowModal);
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const showAccountModal = useSelector(selectProfileShowModal);
  const didMount = useSelector(selectSignInDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  function componentDidMount(): void {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const email = localStorage.getItem("loggedInEmail") || "";
    const password = localStorage.getItem("loggedInPassword") || "";

    getPersistentLogin();

    async function getPersistentLogin() {
      const login = localStorage.getItem("credentials");
      if (login) {
        const credentials: Credentials = JSON.parse(login);
        const { email, password, timestamp } = credentials;
        const currentTimestamp = Date.now();
        const elapsedTime = currentTimestamp - timestamp;
        const isExpired = elapsedTime > 86400000;
        const elapsedInMins = elapsedTime / 1000 / 60;
        const timeElapsedString = elapsedInMins.toString();
        localStorage.setItem("timeElapsedInMins", timeElapsedString);
        if (isExpired) localStorage.setItem("credentials", "");
        else {
          const account = await readAccount({ email, password, name: "", phone: "" });
          if (account) {
            const action = set.globalAccount(account);
            dispatch(action);
          } else localStorage.setItem("credentials", "");
        }
      }
    }

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
    localStorage.setItem("timeElapsedInMins", "");
    localStorage.setItem("credentials", "");
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

/* 
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
import { AccountProfileModal } from "../loginModals/AccountProfileModal";
import "./CollapsibleNavbar.scss";
import "./SignInArea.scss";

export default function SignInAreaUpdate() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showLoginModal = useSelector(selectSignInShowModal);
  const showCreateModal = useSelector(selectCreateShowModal);
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const showAccountModal = useSelector(selectProfileShowModal);
  const didMount = useSelector(selectSignInDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  function componentDidMount(): void {
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

  // opens login modal
  function handleSignIn(): void {
    const action = set.signInShowModal(true);
    dispatch(action);
  }

  // opens profile modal (for account settings)
  function handleAccount(): void {
    const action = set.profileShowModal(true);
    dispatch(action);
  }

  // clears user login and localStorage
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

  return (
    <>
      <li className="nav-item">
        {isSignedIn ? (
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="accountMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "120px", textAlign: "center" }}
            >
              Account
            </button>
            <ul className="dropdown-menu" aria-labelledby="accountMenu">
              <li>
                <button className="dropdown-item" onClick={handleAccount}>
                  Account Settings
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleSignOut}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="sign-in-btn" style={{ width: "120px", textAlign: "center" }} onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </li>

      {showLoginModal && <LoginModal />}
      {showCreateModal && <CreateAccountModal />}
      {showUpdateModal && <UpdateAccountModal />}
      {showAccountModal && <AccountProfileModal />}
    </>
  );
} 
 */
