import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfileShowModal, selectUpdateShowModal } from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { updateAccount } from "../../modules/crud/updateAccount";
import { UpdateAccountModal } from "./UpdateAccountModal";

export function AccountProfileModal() {
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const showProfileModal = useSelector(selectProfileShowModal);
  const isSignedIn = localStorage.getItem("isSignedIn");
  const authUserEmail = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");
  const name = localStorage.getItem("userName");
  const phone = localStorage.getItem("userPhone");

  const dispatch = useDispatch();
  /*   useEffect(componentDidMount, []);

  function componentDidMount() {
    handleOpenModal();
  } */

  /* function handleOpenModal() {
    const showProfileModal = set.accountProfileShowModal(true);
    dispatch(showProfileModal);
  } */
  function handleCloseModal() {
    const closeSignInModal = set.accountProfileShowModal(false);
    dispatch(closeSignInModal);
    const clearName = set.accountProfileName("");
    dispatch(clearName);
    const clearPhone = set.accountProfilePhone("");
    dispatch(clearPhone);
    const clearError = set.accountProfileResponseMessage("");
    dispatch(clearError);
  }

  function handleUpdateModal() {
    const hideProfileModal = set.accountProfileShowModal(false);
    dispatch(hideProfileModal);
    const showUpdateModal = set.updateShowModal(true);
    dispatch(showUpdateModal);
  }

  async function handleLogOut() {
    localStorage.clear();
    const closeProfileModal = set.accountProfileShowModal(false);
    dispatch(closeProfileModal);
    const openSignInModal = set.signInShowModal(true);
    dispatch(openSignInModal);
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
      {showProfileModal && (
        <div
          className="modal fade show"
          id="profileModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered mx-auto">
            <div className="modal-content mx-auto text-white w-100 mx-auto bg-dark border border-1 rounded-0  p-3">
              <div className="modal-body w-100 mx-auto">
                <div className="container mt-3">
                  <div className="card bg-dark text-white ">
                    <h5 className="mb-3 border-bottom pb-2">Personal details</h5>

                    <div className="row mb-2">
                      <div className="col-sm-4 fw-bold">Full name:</div>
                      <div className="col-sm-8">{name}</div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-sm-4 fw-bold">Password:</div>
                      <div className="col-sm-8">{password}</div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-sm-4 fw-bold">Phone Number:</div>
                      <div className="col-sm-8">{phone}</div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4 fw-bold">Email:</div>
                      <div className="col-sm-8">{authUserEmail}</div>
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
