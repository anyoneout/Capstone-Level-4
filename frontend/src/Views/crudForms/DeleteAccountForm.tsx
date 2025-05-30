import React from "react";
import { deleteAccount } from "../../modules/crud/deleteAccount";
import { selectDeleteEmail, selectDeletePassword, selectDeleteResponseMessage } from "../../redux/stateSelectors";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/store";
import { Account } from "../../types/Account";

export function DeleteAccountForm() {
  const email = useSelector(selectDeleteEmail);
  const password = useSelector(selectDeletePassword);
  const responseMessage = useSelector(selectDeleteResponseMessage);

  const dispatch = useDispatch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await deleteAccount({ email, password, name: "", phone: "", hfToken: "", oaToken: "" } as Account);
    console.log("delete account form response", response);
    if (response.status === 401) {
      return dispatch(set.deleteResponseMessage(`Invalid password entered`));
    }

    if (response.status === 200) {
      const action = set.deleteResponseMessage(`user (${email}) deleted successfully`);
      return dispatch(action);
    } else {
      const action = set.deleteResponseMessage("user wasn't deleted");
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
                  aria-label="delete user email"
                  value={email}
                  onChange={(e) => dispatch(set.deleteEmail(e.target.value))}
                />
              </div>

              <div className="input-group" data-bs-theme="dark">
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control api-inputs"
                  aria-label="delete user password"
                  value={password}
                  onChange={(e) => dispatch(set.deletePassword(e.target.value))}
                />
              </div>
            </fieldset>

            <button type="submit" className="btn btn-danger btn-sm">
              Delete
            </button>
          </form>
        </div>
        <div className="col-7 d-flex align-items-center">
          <p>{responseMessage}</p>
        </div>
      </div>
    </div>
  );
}
