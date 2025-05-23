/* import React, { useEffect } from "react";
import { ApiDalleIcon, ApiOpenAiIcon } from "../modules/icons";
import { recipeArray } from "../modules/recipeArray";
import { useDispatch, useSelector } from "react-redux";
import { selectOaPageDidMount } from "../redux/stateSelectors";
import { set } from "../redux/store";
import { handleOaFetchUpdate } from "../controllers/handleOaFetchUpdate";

export function OaPage() {
  const didMount = useSelector(selectOaPageDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container api-container navbar-width mt-3">
      <div
        className="row text-end "
        style={{
          fontSize: "11px",
          minHeight: "20px",
          color: "#fff78a",
        }}
      >
        <div id="userNameHTML"></div>
      </div>
      <div
        className="row mb-5 text-end"
        style={{
          fontSize: "11px",
          minHeight: "20px",
          color: "#fff78a",
        }}
      >
        <div id="userEmailHTML"></div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-5">
          <div
            className="d-flex justify-content-start align-items-center"
            style={{ color: "#fff78a", padding: "10px 0" }}
          >
            <ApiOpenAiIcon />
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <ApiDalleIcon />
          </div>
        </div>
        <div className="col-md-6">
          <form className="api-form">
            <fieldset>
              <legend>User login/ OpenAI token</legend>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Name"
                  aria-label="User Name"
                  aria-describedby="basic-addon1"
                  id="nameInput"
                />
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="User email"
                  aria-describedby="basic-addon2"
                  id="emailInput"
                />
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Token"
                  aria-label="OpenAi Token Input"
                  aria-describedby="basic-addon2"
                  id="openAiTokenInput"
                />
              </div>
            </fieldset>
            <br />
            <fieldset>
              <legend>Generate ingredients</legend>
              <div className="input-group mb-2" data-bs-theme="dark">
                <select className="form-select" id="chosenRecipe" style={{ fontSize: ".8rem" }}>
                  <option value="">Select a Recipe...</option>
                  {recipeArray.map((recipe, index) => (
                    <option key={index} value={recipe}>
                      {recipe}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control"
                  id="customRecipeInputOa"
                  placeholder="Or enter a custom recipe..."
                  style={{ fontSize: ".8rem" }}
                />
              </div>
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="fetchButton"
                style={{}}
                onClick={handleOaFetchUpdate}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-info" role="status" style={{ visibility: "hidden" }} id="spinnerOne">
            <span className="visually-hidden"></span>
          </div>
          <img id="recipeAI" className="rounded-circle" style={{ maxWidth: "100%" }} />
        </div>

        <div className="col-12  d-none d-flex align-items-center justify-content-center">
          <i
            className="bi bi-arrow-right"
            id="secondArrowHTML"
            style={{
              fontSize: "3rem",
              color: "#f1ffb0",
              visibility: "hidden",
            }}
          ></i>
        </div>

        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-info" role="status" style={{ visibility: "hidden" }} id="spinnerTwo">
            <span className="visually-hidden"></span>
          </div>
          <img id="ingredientsAI" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-md-8">
          <div id="recipeIngredients"></div>
        </div>
      </div>
    </div>
  );

  function componentDidMount(): void {
    const action = set.oaPageDidMount(true);
    dispatch(action);
    console.log("The OaPage page component has mounted");
    document.title = "Recipe Deconstructor - Open AI Dall-E-3";
  }

  function componentDidUpdate(): void {
    if (didMount) console.log("component has updated");
  }

  function componentDidUnmount(): () => void {
    return function delayedUnmount(): void {
      console.log("component has unmounted");
    };
  }
}
 */
