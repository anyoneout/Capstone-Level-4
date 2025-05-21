import React, { useEffect } from "react";
import { ApiFluxIcon } from "../modules/icons";
import { recipeArray } from "../modules/recipeArray";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUserHfToken, selectAuthUserOaToken, selectBfPageDidMount } from "../redux/stateSelectors";
import { set } from "../redux/store";
import { handleBfFetchUpdate } from "../controllers/handleBfFetchUpdate";

export function BfPage() {
  const didMount = useSelector(selectBfPageDidMount);
  const dispatch = useDispatch();
  const hfToken = useSelector(selectAuthUserHfToken);
  const oaToken = useSelector(selectAuthUserOaToken);
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container api-container navbar-width mt-5 mb-5 h-100">
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <div className="d-flex black-forest-font justify-content-start">black forest labs.</div>
          <div className="d-flex justify-content-start mb-3">
            <ApiFluxIcon />
          </div>
          <div style={{ color: "rgba(220, 53, 69, 0.8)", fontSize: ".7rem", width: "230px" }}>
            *This model may timeout on the first attempt, if not currently warm on huggingface.co
          </div>
        </div>
        <div className="col-md-6 mt-2">
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
                  id="customRecipeInputBf"
                  placeholder="Or enter a custom recipe..."
                  style={{ fontSize: ".8rem" }}
                />
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                  id="bfFetchButton"
                  onClick={handleClick}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="row">
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
        <div className="col-10 col-md-2">
          <div id="recipeIngredients"></div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    if (!oaToken || !hfToken) {
      alert("Both an OpenAI token and Hugging Face token are required!");
      return;
    }
    handleBfFetchUpdate();
  }

  function componentDidMount(): void {
    dispatch(set.bfPageDidMount(true));
    document.title = "Recipe Deconstructor - Black Forest Flux";
    console.log("The Black Forest page component has mounted");
  }

  function componentDidUpdate(): void {
    if (didMount) {
      console.log("component has updated");
    }
  }

  function componentDidUnmount(): () => void {
    return () => {
      dispatch(set.bfPageDidMount(false));
      console.log("component has unmounted");
    };
  }
}
