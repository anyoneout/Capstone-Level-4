import React, { useEffect } from "react";
import { ApiFluxIcon } from "../modules/icons";
import { recipeArray } from "../modules/recipeArray";
import { useDispatch, useSelector } from "react-redux";
import { selectBfPageDidMount, selectRecipeApiRecipe, selectRecipeApiStatus } from "../redux/stateSelectors";
import { set } from "../redux/store";
import { handleBfFetchUpdate } from "../controllers/handleBfFetchUpdate";

import { getRecipe } from "../modules/getRecipe";

export function BfPage() {
  const dispatch = useDispatch();
  const didMount = useSelector(selectBfPageDidMount);
  const apiStatus = useSelector(selectRecipeApiStatus);
  const aiRecipeChoice = useSelector(selectRecipeApiRecipe);

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

        <div className="col-md-6 mb-4">
          <form onSubmit={handleClick}>
            <legend>Select a recipe, enter ingredients or enter a recipe</legend>
            <fieldset>
              <div className="input-group mb-2 " data-bs-theme="dark">
                <select className="form-select custom-focus-border" id="chosenBfRecipe" style={{ fontSize: ".8rem" }} onFocus={clearResponse}>
                  <option value="">Select a Recipe...</option>
                  {recipeArray.map((recipe, index) => (
                    <option key={index} value={recipe}>
                      {recipe}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <div className="d-flex justify-content-center" data-bs-theme="dark" style={{ width: "100%", fontSize: ".8rem" }}>
                  <input
                    type="text"
                    className="form-control custom-focus-border"
                    placeholder="Ingredient 1"
                    name="ingredientOne"
                    style={{ fontSize: ".8rem" }}
                    id="ingredientBfOne"
                    onFocus={clearResponse}
                  />
                  <input
                    type="text"
                    className="form-control mx-2 custom-focus-border"
                    placeholder="Ingredient 2"
                    name="ingredientTwo"
                    style={{ fontSize: ".8rem" }}
                    id="ingredientBfTwo"
                    onFocus={clearResponse}
                  />

                  <input
                    type="text"
                    className="form-control custom-focus-border"
                    placeholder="Ingredient 3"
                    name="ingredientThree"
                    style={{ fontSize: ".8rem" }}
                    id="ingredientBfThree"
                    onFocus={clearResponse}
                  />
                </div>
              </div>

              <div className="input-group mt-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control custom-focus-border"
                  id="customRecipeInputBf"
                  placeholder="Or enter a custom recipe..."
                  style={{ fontSize: ".8rem" }}
                  onFocus={clearResponse}
                />
                <button className="btn btn-sm btn-outline-secondary" type="submit" id="bfFetchButton">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div className="mt-2 pt-2 d-flex justify-content-center">
            <h5>{aiRecipeChoice}</h5>
            <h5>{apiStatus}</h5>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info position-absolute top-60 start-25"
            role="status"
            id="spinnerBfOne"
            style={{ visibility: "hidden" }}
          >
            <span className="visually-hidden"></span>
          </div>
          <img id="recipeBfAi" className="rounded-circle" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-info" role="status" id="spinnerBfTwo" style={{ visibility: "hidden" }}>
            <span className="visually-hidden"></span>
          </div>
          <img id="ingredientsBfAi" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-10 col-md-2">
          <div id="recipeBfIngredients"></div>
        </div>
      </div>
    </div>
  );

  async function handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hfToken = localStorage.getItem("hfToken");
    const oaToken = localStorage.getItem("oaToken");
    if (!oaToken || !hfToken) {
      return alert("Both an OpenAI and Hugging Face token are required!");
    }
    const form = event.target;
    const dropDownRecipe = form[1].value;
    const ingredient1 = form[2].value;
    const ingredient2 = form[3].value;
    const ingredient3 = form[4].value;
    const customRecipe = form[5].value;
    dispatch(set.recipeApiDropDownRecipe(dropDownRecipe));
    dispatch(set.recipeApiCustomRecipe(customRecipe));
    const searchIngredients = [ingredient1, ingredient2, ingredient3].join(",");
    const recipeReturned = await getRecipe(dispatch, searchIngredients);
    if (recipeReturned === "No recipe found with those ingredients!") {
      dispatch(set.recipeApiRecipe("No recipe found. Please try different ingredients."));
      return;
    }
    handleBfFetchUpdate(dropDownRecipe, customRecipe, recipeReturned);
  }

  function clearResponse(): void {
    if (aiRecipeChoice) {
      dispatch(set.recipeApiRecipe(""));
    }
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
      localStorage.setItem("aiRecipe", "");
      dispatch(set.recipeApiRecipe(""));
      console.log("component has unmounted");
    };
  }
}
