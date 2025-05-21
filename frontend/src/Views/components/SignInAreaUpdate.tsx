import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";
import {
  selectCreateShowModal,
  selectProfileShowModal,
  selectSignInDidMount,
  selectSignInIsSignedIn,
  selectSignInShowModal,
  selectUpdateShowModal,
} from "../../redux/stateSelectors";
import { LoginModal } from "../loginModals/LoginModal";
import { CreateAccountModal } from "../loginModals/CreateAccountModal";
import { UpdateAccountModal } from "../loginModals/UpdateAccountModal";
import { AccountProfileModal } from "../loginModals/AccountProfileModal";
import { readAccount } from "../../modules/crud/readAccount";
import { Credentials } from "../../types/Credentials";
import "./CollapsibleNavbar.scss";
import "./SignInArea.scss";
import { handleClearLocalStorage } from "../../controllers/handleClearLocalStorage";
import { deleteAccount } from "../../modules/crud/deleteAccount";

export default function SignInAreaUpdate() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showLoginModal = useSelector(selectSignInShowModal);
  const showCreateModal = useSelector(selectCreateShowModal);
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const showProfileModal = useSelector(selectProfileShowModal);
  const didMount = useSelector(selectSignInDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  function componentDidMount(): void {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const email = localStorage.getItem("email") || "";
    const password = localStorage.getItem("password") || "";

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
          const account = await readAccount({ email, password, name: "", phone: "", hfToken: "", oaToken: "" });
          if (account) {
            /*        const action = set.globalAccount(account);
            dispatch(action); */
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
    const didMount = set.signInDidMount(true);
    dispatch(didMount);
  }
  //shows profileModal
  function handleProfile(): void {
    const action = set.accountProfileShowModal(true);
    dispatch(action);
  }
  //shows updateModal
  function handleUpdate(): void {
    const action = set.updateShowModal(true);
    dispatch(action);
  }
  //delete user
  async function handleDelete() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    await deleteAccount({ email, password, name: "", phone: "", hfToken: "", oaToken: "" });
    const clearIsSignedIn = set.signInIsSignedIn(false);
    dispatch(clearIsSignedIn);
    const clearAuthUserEmail = set.authUserEmail("");
    dispatch(clearAuthUserEmail);
    const clearAuthUserPassword = set.authUserPassword("");
    dispatch(clearAuthUserPassword);
    const clearAuthUserName = set.authUserName("");
    dispatch(clearAuthUserName);
    const clearAuthUserPhone = set.authUserPhone("");
    dispatch(clearAuthUserPhone);
    const clearAuthUserHfToken = set.authUserHfToken("");
    dispatch(clearAuthUserHfToken);
    const clearAuthUserOaToken = set.authUserOaToken("");
    dispatch(clearAuthUserOaToken);
    handleClearLocalStorage();
    const action = set.globalAccount("");
    dispatch(action);
  }

  //clears authorized redux, local storage and signs out

  function handleSignOut(): void {
    const clearIsSignedIn = set.signInIsSignedIn(false);
    dispatch(clearIsSignedIn);
    const clearAuthUserEmail = set.authUserEmail("");
    dispatch(clearAuthUserEmail);
    const clearAuthUserPassword = set.authUserPassword("");
    dispatch(clearAuthUserPassword);
    const clearAuthUserName = set.authUserName("");
    dispatch(clearAuthUserName);
    const clearAuthUserPhone = set.authUserPhone("");
    dispatch(clearAuthUserPhone);
    const clearAuthUserHfToken = set.authUserHfToken("");
    dispatch(clearAuthUserHfToken);
    const clearAuthUserOaToken = set.authUserOaToken("");
    dispatch(clearAuthUserOaToken);
    handleClearLocalStorage();
    /*     const action = set.globalAccount("");
    dispatch(action); */
  }

  return (
    <>
      <li className="nav-item">
        {isSignedIn ? (
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle mt-1 me-1 account-button"
              type="button"
              id="accountMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi-file-person"></i> Account
            </button>
            <ul
              className="dropdown-menu"
              data-bs-theme="dark"
              style={{ backgroundColor: "black" }}
              aria-labelledby="accountMenu"
            >
              <li>
                <button className="dropdown-item" style={{ color: "#079ab8" }} onClick={handleProfile}>
                  Profile
                </button>
              </li>
              <li>
                <button className="dropdown-item" style={{ color: "#fff78a" }} onClick={handleUpdate}>
                  Update
                </button>
              </li>
              <li>
                <button className="dropdown-item text-danger" onClick={handleDelete}>
                  Delete
                </button>
              </li>
              <li>
                <button className="dropdown-item text-white" onClick={handleSignOut}>
                  Sign out
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
      {showProfileModal && <AccountProfileModal />}
      {showUpdateModal && <UpdateAccountModal />}
    </>
  );
}
