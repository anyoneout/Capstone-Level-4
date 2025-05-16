import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthUserEmail,
  selectAuthUserPassword,
  selectUpdateHfToken,
  selectUpdateName,
  selectUpdateOaToken,
  selectUpdatePassword,
  selectUpdatePhone,
  selectUpdateResponseMessage,
  selectUpdateShowModal,
  selectSignInIsSignedIn,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";
import { updateAccount } from "../../modules/crud/updateAccount";

export function UpdateAccountModal() {
  const authUserEmail = useSelector(selectAuthUserEmail);
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  const showModal = useSelector(selectUpdateShowModal);
  const responseMessage = useSelector(selectUpdateResponseMessage);

  const authUserPassword = useSelector(selectAuthUserPassword);
  const password = useSelector(selectUpdatePassword);
  const name = useSelector(selectUpdateName);
  const phone = useSelector(selectUpdatePhone);
  const hfToken = useSelector(selectUpdateHfToken);
  const oaToken = useSelector(selectUpdateOaToken);

  const dispatch = useDispatch();
  /*  useEffect(componentDidMount, []);

  function componentDidMount() {
    handleOpenModal();
  }
 */
  function handleOpenModal() {
    const showSignInModal = set.updateShowModal(true);
    dispatch(showSignInModal);
  }
  function handleCloseModal() {
    const closeUpdateModal = set.updateShowModal(false);
    dispatch(closeUpdateModal);
    /*    const showProfileModal = set.accountProfileShowModal(true);
    dispatch(showProfileModal); */
  }

  //run locally or remotely
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

  async function handleUpdateSubmit(event: React.FormEvent) {
    event.preventDefault();

    const account = { email: authUserEmail, password: authUserPassword, name, phone, hfToken, oaToken };
    const response = await updateAccount(account);
    console.log("update account form response", response);

    if (!name || !phone) {
      const setErrorResponse = set.updateResponseMessage("All fields must be filled out");
      return dispatch(setErrorResponse);
    }

    if (response.status === 400) {
      const action = set.updateResponseMessage("Please fill out all fields");
      debugger;
      return dispatch(action);
    }
    if (response.status === 200) {
      const closeUpdateModal = set.updateShowModal(false);
      dispatch(closeUpdateModal);
      /*     const showProfileModal = set.accountProfileShowModal(true);
      dispatch(showProfileModal); */
      const action = set.updateResponseMessage(`Successfully updated!`);
      return dispatch(action);
    } else {
      const action = set.updateResponseMessage("User wasn't updated");
      return dispatch(action);
    }
  }
  if (isSignedIn) {
    return null;
  }

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          id="updateModal"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered mx-auto" style={{ width: "350px" }} data-bs-theme="dark">
            <div className="modal-content mx-auto bg-dark text-white border rounded-0">
              <div className="modal-header">
                <h3 className="modal-title">Edit Account</h3>
              </div>
              <form onSubmit={handleUpdateSubmit}>
                <div className="modal-body">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                    aria-label=" user email"
                    defaultValue={authUserEmail}
                    readOnly
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    aria-label="confirm password"
                    placeholder="password"
                    defaultValue={authUserPassword}
                    readOnly
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                    aria-label="update user name"
                    value={name}
                    onChange={(e) => dispatch(set.updateName(e.target.value))}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone"
                    aria-label="update user phone"
                    value={phone}
                    onChange={(e) => dispatch(set.updatePhone(e.target.value))}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Hugging Face token"
                    aria-label="update Hugging Face token"
                    value={hfToken}
                    onChange={(e) => dispatch(set.updatePhone(e.target.value))}
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Open AI token"
                    aria-label="update OpenAI token"
                    value={oaToken}
                    onChange={(e) => dispatch(set.updatePhone(e.target.value))}
                  />
                  <div style={{ minHeight: "1.35rem", fontSize: ".85rem" }} className="mx-auto text-danger">
                    {" "}
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
