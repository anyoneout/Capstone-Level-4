import React, { useEffect } from "react";
import { ApiDalleIcon, ApiOpenAiIcon } from "../modules/icons";
import { recipeArray } from "../modules/recipeArray";
import { useDispatch, useSelector } from "react-redux";
import { selectOaPageDidMount } from "../redux/stateSelectors";
import { set } from "../redux/store";
import { handleOaFetchUpdate } from "../controllers/handleOaFetchUpdate";

export function OaPage() {
  const hfToken = localStorage.getItem("hfToken");
  const didMount = useSelector(selectOaPageDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container api-container navbar-width mt-5 mb-5">
      <div className="row mt-5 mb-5">
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

        <div className="col-md-6 mt-2 mb-4">
          <form className="api-form">
            <fieldset>
              <legend>Select a recipe or enter a recipe</legend>
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

              <div className="input-group mt-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control"
                  id="customRecipeInputOa"
                  placeholder="Or enter a custom recipe..."
                  style={{ fontSize: ".8rem" }}
                />
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                  id="oaFetchButton"
                  onClick={handleClick}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info position-absolute top-60 start-25"
            role="status"
            id="spinnerOne"
            style={{ visibility: "hidden" }}
          >
            <span className="visually-hidden"></span>
          </div>
          <img id="recipeAI" className="rounded-circle" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-info" role="status" id="spinnerTwo" style={{ visibility: "hidden" }}>
            <span className="visually-hidden"></span>
          </div>
          <img id="ingredientsAI" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-10 col-md-2 d-flex align-items-center">
          <div id="recipeIngredients"></div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    if (!hfToken) {
      alert("An Open AI token is required!");
      return;
    }
    handleOaFetchUpdate();
  }

  function componentDidMount(): void {
    dispatch(set.oaPageDidMount(true));
    document.title = "Recipe Deconstructor - Open AI Dall-E-3";
  }

  function componentDidUpdate(): void {
    if (didMount) console.log("component has updated");
  }

  function componentDidUnmount(): () => void {
    return function delayedUnmount(): void {
      dispatch(set.oaPageDidMount(false));
      console.log("component has unmounted");
    };
  }
}
