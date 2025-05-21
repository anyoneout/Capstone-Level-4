import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../redux/store";
import {
  selectRecipeApiDidMount,
  selectRecipeApiIngredients,
  selectRecipeApiRecipe,
  selectRecipeApiStatus,
  selectValidIngredients,
} from "../redux/stateSelectors";
import { AiPage } from "./AiPage";

export function RecipeApiResponsePage() {
  const dispatch = useDispatch();
  const foundRecipes = useSelector(selectRecipeApiRecipe);
  const chosenIngredients = useSelector(selectRecipeApiIngredients);
  const recipeStatus = useSelector(selectRecipeApiStatus);
  const validIngredients = useSelector(selectValidIngredients);
  const didMount = useSelector(selectRecipeApiDidMount);

  const localPath = window.location.hostname;
  const baseUrl = localPath === "localhost" ? "http://localhost:3001" : process.env.REACT_APP_LAMBDA_URL;

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target;
    const ingredient1 = form[0].value;
    const ingredient2 = form[1].value;
    const ingredient3 = form[2].value;

    const searchIngredients = [ingredient1, ingredient2, ingredient3];

    const ingredientsString = set.recipeApiIngredients(searchIngredients);
    dispatch(ingredientsString);

    const url = `${baseUrl}/recipesSimple?ingredients=${searchIngredients}`;
    const response = await axios.get(url);
    const recipeArray = response.data;

    const contextString = recipeArray;
    const returnedRecipe = set.recipeApiRecipe(contextString);
    dispatch(returnedRecipe);
  }

  return (
    <main>
      <div className="container mt-5">
        <h2>Recipe Finder</h2>
        <form onSubmit={handleSearch}>
          <label>Enter three ingredients for find a recipe</label>
          <div className="d-flex justify-content-center" data-bs-theme="dark" style={{ fontSize: ".8rem" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Ingredient 1"
              name="ingredientOne"
              style={{ fontSize: ".8rem" }}
              required
            />
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Ingredient 2"
              name="ingredientTwo"
              style={{ fontSize: ".8rem" }}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Ingredient 3"
              name="ingredientThree"
              style={{ fontSize: ".8rem" }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm mt-2 mb-3">
            Search
          </button>
        </form>
      </div>
      <div>
        <AiPage />
      </div>
    </main>
  );
  function componentDidMount(): void {
    const action = set.recipeApiDidMount(true);
    dispatch(action);
    console.log("The Recipe Api page component has mounted");
    document.title = "Recipe Deconstructor - Recipe Api Page";
  }

  function componentDidUpdate(): void {
    if (didMount) console.log("component had updated");
  }

  function componentDidUnmount(): () => void {
    function delayedUnmount(): void {
      const didMount = set.recipeApiDidMount(false);
      dispatch(didMount);
      const recipe = set.recipeApiRecipe("");
      dispatch(recipe);
      const ingredients = set.recipeApiIngredients("");
      dispatch(ingredients);
      console.log("component has unmounted");
    }
    return delayedUnmount;
  }
}
