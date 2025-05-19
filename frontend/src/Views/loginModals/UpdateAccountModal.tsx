import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignInIsSignedIn,
  selectAuthUserEmail,
  selectAuthUserPassword,
  selectAuthUserName,
  selectAuthUserPhone,
  selectAuthUserHfToken,
  selectAuthUserOaToken,
  selectUpdateResponseMessage,
  selectUpdateShowModal,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { updateAccount } from "../../modules/crud/updateAccount";
import { readAccount } from "../../modules/crud/readAccount";

export function UpdateAccountModal() {
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showUpdateModal = useSelector(selectUpdateShowModal);
  const responseMessage = useSelector(selectUpdateResponseMessage);

  const password = useSelector(selectAuthUserPassword);
  const name = useSelector(selectAuthUserName);
  const phone = useSelector(selectAuthUserPhone);
  const hfToken = useSelector(selectAuthUserHfToken);
  const oaToken = useSelector(selectAuthUserOaToken);
  const authEmail = useSelector(selectAuthUserEmail);
  const authPassword = useSelector(selectAuthUserPassword);
  const authEmailLs = localStorage.getItem("email");
  const authPasswordLs = localStorage.getItem("password");

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  //sets modal visibility to true upon page load via componentDidMount
  function componentDidMount(): void {
    handleOpenModal();
  }

  async function handleOpenModal() {
    const didMount = set.updateDidMount(true);
    dispatch(didMount);
    const hideSignInModal = set.signInShowModal(false);
    dispatch(hideSignInModal);
    const showUpdateModal = set.updateShowModal(true);
    dispatch(showUpdateModal);

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
      //if user exists, signs in, saves authorized user email, password, sets localstorage, and closes login modal

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
    const closeUpdateModal = set.updateShowModal(false);
    dispatch(closeUpdateModal);
  }

  async function handleUpdateSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target;
    const updateEmail = form[0].value;
    const updatePassword = form[1].value;
    const updateName = form[2].value;
    const updatePhone = form[3].value;
    const updateHfToken = form[4].value;
    const updateOaToken = form[5].value;

    const account = {
      email: updateEmail,
      password: updatePassword,
      name: updateName,
      phone: updatePhone,
      hfToken: updateHfToken,
      oaToken: updateOaToken,
    };
    const response = await updateAccount(account);
    console.log("update account form response", response);

    if (!name || !phone) {
      const setErrorResponse = set.updateResponseMessage("All fields must be filled out");
      return dispatch(setErrorResponse);
    }

    if (response.status === 400) {
      const action = set.updateResponseMessage("Please fill out all fields");
      return dispatch(action);
    }
    if (response.status === 200) {
      const action = set.updateResponseMessage(`Successfully updated!`);
      dispatch(action);
      const closeUpdateModal = set.updateShowModal(false);
      dispatch(closeUpdateModal);
      const openUpdateModal = set.updateShowModal(true);
      dispatch(openUpdateModal);
    } else {
      const action = set.updateResponseMessage("User wasn't updated");
      return dispatch(action);
    }
  }
  /*   if (isSignedIn) {
    return null;
  } */

  return (
    <>
      {showUpdateModal && (
        <div
          className="modal fade show"
          id="updateModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered mx-auto" style={{ width: "340px" }}>
            <div className="modal-content mx-auto bg-dark text-white border rounded-0">
              <div className="modal-header d-flex justify-contents-center text-center">
                <h3 className="modal-title text-center">Edit Account</h3>
              </div>
              <form onSubmit={handleUpdateSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-5">
                      {" "}
                      <ul className="list-unstyled">
                        <li>Email:</li>
                        <li>Password:</li>
                        <li>Name:</li>
                        <li>Phone:</li>
                        <br />
                        <li>
                          <u>Tokens</u>
                        </li>
                        <br />
                        <li>Hugging Face:</li>
                        <li>Open AI:</li>
                      </ul>
                    </div>
                    <div className="col-7">
                      {" "}
                      <ul className="list-unstyled">
                        <li>{authEmail}</li>
                        <li>{authPassword}</li>
                        <li>{name}</li>
                        <li>{phone}</li>
                        <br />
                        <br />
                        <br />

                        <li>{hfToken.slice(0, 12)}</li>
                        <li>{oaToken.slice(0, 12)}</li>
                        <li className="mb-2"></li>
                      </ul>
                    </div>
                  </div>
                  <div className="input-group mb-1 mt-4">
                    <span className="input-group-text">Email:</span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="user email"
                      defaultValue={authEmail}
                      readOnly
                    />
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">Password:</span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="password"
                      placeholder="password"
                      defaultValue={authPassword}
                      readOnly
                    />
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">Name:</span>
                    <input
                      type="text"
                      className="form-control"
                      name="updateName"
                      placeholder="........"
                      aria-label="update user name"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">Phone:</span>
                    <input type="tel" className="form-control" name="updatePhone" aria-label="update user phone" />
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">Hugging Face:</span>
                    <input
                      type="text"
                      className="form-control"
                      name="updateHfToken"
                      aria-label="update Hugging Face token"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <span className="input-group-text">Open AI:</span>
                    <input type="text" className="form-control" name="updateOaToken" aria-label="update OpenAI token" />
                  </div>

                  <div style={{ minHeight: "1.35rem", fontSize: ".85rem" }} className="mx-auto text-danger">
                    {responseMessage}
                  </div>
                  <div>
                    <button type="submit" className="mx-auto btn btn-warning btn-sm w-100">
                      Update
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={handleCloseModal} className="btn btn-secondary w-100 btn-sm">
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
