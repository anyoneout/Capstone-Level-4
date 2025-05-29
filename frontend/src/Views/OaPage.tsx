import React, { useEffect } from "react";
import { ApiDalleIcon, ApiOpenAiIcon } from "../modules/icons";
import { recipeArray } from "../modules/recipeArray";
import { useDispatch, useSelector } from "react-redux";
import { selectOaPageDidMount, selectRecipeApiRecipe } from "../redux/stateSelectors";
import { set } from "../redux/store";
import { handleOaFetchUpdate } from "../controllers/handleOaFetchUpdate";
import { getRecipe } from "../modules/getRecipe";

export function OaPage() {
  const dispatch = useDispatch();
  const didMount = useSelector(selectOaPageDidMount);
  const aiRecipeChoice = useSelector(selectRecipeApiRecipe);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container api-container navbar-width mt-5 mb-5">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 mt-3 mb-5">
          <div className="d-flex justify-content-start align-items-center" style={{ color: "#fff78a", padding: "10px 0" }}>
            <ApiOpenAiIcon />
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <ApiDalleIcon />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <form onSubmit={handleClick}>
            <legend>Select a recipe, enter ingredients or enter a recipe</legend>
            <fieldset>
              <div className="input-group mb-2" data-bs-theme="dark">
                <select className="form-select custom-focus-border" id="chosenOaRecipe" style={{ fontSize: ".8rem" }} onFocus={clearResponse}>
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
                    id="ingredientOaOne"
                    onFocus={clearResponse}
                  />
                  <input
                    type="text"
                    className="form-control mx-2 custom-focus-border"
                    placeholder="Ingredient 2"
                    name="ingredientTwo"
                    style={{ fontSize: ".8rem" }}
                    id="ingredientOaTwo"
                    onFocus={clearResponse}
                  />

                  <input
                    type="text"
                    className="form-control custom-focus-border"
                    placeholder="Ingredient 3"
                    name="ingredientThree"
                    style={{ fontSize: ".8rem" }}
                    id="ingredientOaThree"
                    onFocus={clearResponse}
                  />
                </div>
              </div>

              <div className="input-group mt-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control custom-focus-border"
                  id="customRecipeInputOa"
                  placeholder="Or enter a custom recipe..."
                  style={{ fontSize: ".8rem" }}
                  onFocus={clearResponse}
                />
                <button className="btn btn-sm btn-outline-secondary" type="submit" id="oaFetchButton">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div className="mt-2 pt-2 d-flex justify-content-center">
            <h5>{aiRecipeChoice}</h5>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info position-absolute top-60 start-25"
            role="status"
            id="spinnerOaOne"
            style={{ visibility: "hidden" }}
          >
            <span className="visually-hidden"></span>
          </div>
          <img id="recipeOaAi" className="rounded-circle" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-info" role="status" id="spinnerOaTwo" style={{ visibility: "hidden" }}>
            <span className="visually-hidden"></span>
          </div>
          <img id="ingredientsOaAi" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-10 col-md-2 d-flex align-items-center">
          <div id="recipeOaIngredients"></div>
        </div>
      </div>
    </div>
  );

  async function handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const oaToken = localStorage.getItem("oaToken");
    if (!oaToken) {
      return alert("An Open AI token is required!");
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
    handleOaFetchUpdate(dropDownRecipe, customRecipe, recipeReturned);
  }

  function clearResponse(): void {
    if (aiRecipeChoice) {
      dispatch(set.recipeApiRecipe(""));
    }
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
      dispatch(set.recipeApiRecipe(""));
      localStorage.setItem("aiRecipe", "");
      console.log("component has unmounted");
    };
  }
}
