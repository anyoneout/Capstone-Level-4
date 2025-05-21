import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthUserEmail,
  selectAuthUserHfToken,
  selectAuthUserName,
  selectAuthUserOaToken,
  selectAuthUserPassword,
  selectAuthUserPhone,
  selectProfileShowModal,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { readAccount } from "../../modules/crud/readAccount";
import { handleClearLocalStorage } from "../../controllers/handleClearLocalStorage";

export function AccountProfileModal() {
  const showProfileModal = useSelector(selectProfileShowModal);
  const authEmail = useSelector(selectAuthUserEmail);
  const authPassword = useSelector(selectAuthUserPassword);
  const authName = useSelector(selectAuthUserName);
  const authPhone = useSelector(selectAuthUserPhone);
  const authHfToken = useSelector(selectAuthUserHfToken);
  const authOaToken = useSelector(selectAuthUserOaToken);
  const authEmailLs = localStorage.getItem("email");
  const authPasswordLs = localStorage.getItem("password");

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  //sets modal visibility to true upon page load via componentDidMount
  function componentDidMount(): void {
    handleOpenModal();
  }

  async function handleOpenModal() {
    const didMount = set.accountProfileDidMount(true);
    dispatch(didMount);
    const hideSignInModal = set.signInShowModal(false);
    dispatch(hideSignInModal);
    const showCreateModal = set.accountProfileShowModal(true);
    dispatch(showCreateModal);

    const result = await readAccount({
      email: authEmailLs,
      password: authPasswordLs,
      name: "",
      phone: "",
      hfToken: "",
      oaToken: "",
    });
    //I needed a way to check whether a status code or an Account were being returned and this seemed to be the most simple way to do it
    if ("status" in result) {
      if (result.status === 400) {
        const setErrorResponse = set.signInError("Input format is invalid.");
        return dispatch(setErrorResponse);
      }
      if (result.status === 404) {
        const setErrorResponse = set.signInError("User not found");
        return dispatch(setErrorResponse);
      }
    } else {
      localStorage.setItem("loggedIn", "true");
      const saveEmail = set.authUserEmail(result.email);
      dispatch(saveEmail);
      localStorage.setItem("email", result.email);
      const savePassword = set.authUserPassword(result.password);
      dispatch(savePassword);
      localStorage.setItem("password", result.password);
      const saveName = set.authUserName(result.name);
      dispatch(saveName);
      localStorage.setItem("name", result.name);
      const savePhone = set.authUserPhone(result.phone);
      dispatch(savePhone);
      localStorage.setItem("phone", result.phone);
      const saveHfToken = set.authUserHfToken(result.hfToken);
      dispatch(saveHfToken);
      localStorage.setItem("hfToken", result.hfToken);
      const saveOaToken = set.authUserOaToken(result.oaToken);
      dispatch(saveOaToken);
      localStorage.setItem("oaToken", result.oaToken);
    }
  }

  function handleCloseModal() {
    const didUnMount = set.accountProfileDidMount(false);
    dispatch(didUnMount);
    const closeProfileModal = set.accountProfileShowModal(false);
    dispatch(closeProfileModal);
  }

  function handleUpdateModal() {
    const didUnMount = set.accountProfileDidMount(true);
    dispatch(didUnMount);
    const hideProfileModal = set.accountProfileShowModal(false);
    dispatch(hideProfileModal);
    const showUpdateModal = set.updateShowModal(true);
    dispatch(showUpdateModal);
  }

  async function handleLogOut() {
    handleClearLocalStorage();
    const didUnMount = set.accountProfileDidMount(false);
    dispatch(didUnMount);
    const closeProfileModal = set.accountProfileShowModal(false);
    dispatch(closeProfileModal);
    const clearIsSignedIn = set.signInIsSignedIn(false);
    dispatch(clearIsSignedIn);
    const clearAuthUserEmail = set.authUserEmail("");
    dispatch(clearAuthUserEmail);
    const clearAuthUserPassword = set.authUserPassword("");
    dispatch(clearAuthUserPassword);
    /*  const action = set.globalAccount("");
    dispatch(action); */
  }

  return (
    <>
      {showProfileModal && (
        <div
          className="modal fade show w-100"
          id="profileModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered mx-auto w-100"
            data-bs-theme="dark"
            style={{ width: "340px" }}
          >
            <div className="modal-content mx-auto bg-dark text-white border rounded-0">
              <div className="modal-body w-100 mx-auto">
                <div className="container mt-3">
                  <div className="card bg-dark text-white ">
                    <h5 className="mb-3 border-bottom pb-2">Personal details</h5>

                    <div className="row mb-2">
                      <div className="col-md-6 fw-bold">Full name:</div>
                      <div className="col-md-6">{authName}</div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-md-6 fw-bold">Password:</div>
                      <div className="col-md-6">{authPassword}</div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-md-6 fw-bold">Phone Number:</div>
                      <div className="col-md-6">{authPhone}</div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-md-6 fw-bold">Email:</div>
                      <div className="col-md-6">{authEmail}</div>
                    </div>

                    <br />
                    <div className="row mb-2">
                      <div className="col-md-6 fw-bold">Hugging Face token:</div>
                      <div className="col-md-6">{authHfToken.slice(0, 12)}</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-md-6 fw-bold">Open AI token:</div>
                      <div className="col-md-6">{authOaToken.slice(0, 12)}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleUpdateModal}
                  type="button"
                  className="mx-auto mt-5 pt-1 btn btn-warning btn-sm w-100"
                >
                  Update
                </button>
                <button onClick={handleLogOut} type="button" className="mx-auto pt-1 btn btn-primary btn-sm w-100">
                  Log out
                </button>
                <button onClick={handleCloseModal} type="button" className="btn btn-secondary w-100 btn-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
