import React from "react";
import { updateAccount } from "../../modules/crud/updateAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUpdateEmail,
  selectUpdateHfToken,
  selectUpdateName,
  selectUpdateOaToken,
  selectUpdatePassword,
  selectUpdatePhone,
  selectUpdateResponseMessage,
} from "../../redux/stateSelectors";
import { set } from "../../redux/store";

export function UpdateAccountForm() {
  const email = useSelector(selectUpdateEmail);
  const password = useSelector(selectUpdatePassword);
  const name = useSelector(selectUpdateName);
  const phone = useSelector(selectUpdatePhone);
  const hfToken = useSelector(selectUpdateHfToken);
  const oaToken = useSelector(selectUpdateOaToken);
  const responseMessage = useSelector(selectUpdateResponseMessage);

  const dispatch = useDispatch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await updateAccount({ email, password, name, phone, oaToken, hfToken });
    console.log("update account form response", response);
    if (response.status === 200) {
      const action = set.updateResponseMessage(`user (${email}) updated successfully`);
      return dispatch(action);
    } else {
      const action = set.updateResponseMessage("user wasn't updated");
      return dispatch(action);
    }
  }

  return (
    <div className="container mb-2">
      <div className="row crud-forms d-flex align-items-center p-4">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <fieldset className="mb-1">
              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="email"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="update user email"
                  value={email}
                  onChange={(e) => dispatch(set.updateEmail(e.target.value))}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control api-inputs"
                  aria-label="update user password"
                  value={password}
                  onChange={(e) => dispatch(set.updatePassword(e.target.value))}
                />
              </div>
              <div className="input-group mb-1" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Name"
                  aria-label="update user name"
                  value={name}
                  onChange={(e) => dispatch(set.updateName(e.target.value))}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Phone"
                  aria-label="update user phone"
                  value={phone}
                  onChange={(e) => dispatch(set.updatePhone(e.target.value))}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Hugging Face token"
                  aria-label="update Hugging Face token"
                  value={hfToken}
                  onChange={(e) => dispatch(set.updateHfToken(e.target.value))}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="OpenAi token"
                  aria-label="update OpenAI token"
                  value={oaToken}
                  onChange={(e) => dispatch(set.updateOaToken(e.target.value))}
                />
              </div>
            </fieldset>
            <div className="col-1 d-flex align-items-center">
              <button type="submit" className="btn btn-warning btn-sm">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="col-7">
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
