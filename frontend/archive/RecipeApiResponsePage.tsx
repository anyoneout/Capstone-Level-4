import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../src/redux/store";
import {
  selectRecipeAiQuestionResponse,
  selectRecipeAiUserContext,
  selectRecipeAiUserQuestion,
  selectRecipeApiDidMount,
  selectRecipeApiIngredients,
  selectRecipeApiRecipe,
  selectRecipeApiStatus,
  selectValidIngredients,
} from "../src/redux/stateSelectors";
import { getAnswer } from "../src/modules/appEngine/getAnswer";

export function RecipeApiResponsePage() {
  const dispatch = useDispatch();
  const foundRecipe = useSelector(selectRecipeApiRecipe);
  const chosenIngredients = useSelector(selectRecipeApiIngredients);
  const recipeStatus = useSelector(selectRecipeApiStatus);
  const validIngredients = useSelector(selectValidIngredients);
  const didMount = useSelector(selectRecipeApiDidMount);
  const aiUserQuestion = useSelector(selectRecipeAiUserQuestion);
  const aiUserContext = useSelector(selectRecipeAiUserContext);
  const aiQuestionResponse = useSelector(selectRecipeAiQuestionResponse);

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
    console.log(form);
    console.log(ingredient1);
    const searchIngredients = [ingredient1, ingredient2, ingredient3].join(",");

    const ingredientsString = set.recipeApiIngredients(searchIngredients);
    dispatch(ingredientsString);

    //api call to get recipe
    const url = `${baseUrl}/recipesSimple?ingredients=${searchIngredients}`;
    const response = await axios.get(url);
    console.log(response);
    if (response.status === 500) {
      return dispatch(set.recipeApiStatus(`there are no recipes with those ingredients found`));
    } else {
      const recipeReturned = response.data;
      const returnedRecipe = set.recipeApiRecipe(recipeReturned);
      dispatch(returnedRecipe);

      const questionString = `What is a recipe that uses ${searchIngredients}?`;
      const updateQuestion = set.recipeAiUserQuestion(questionString);
      dispatch(updateQuestion);

      const contextString = `${recipeReturned} is a recipe that uses these ingredients: ${searchIngredients}.`;
      const updateContext = set.recipeAiUserContext(contextString);
      dispatch(updateContext);

      //ai call to get answer
      const aiResult = await getAnswer(questionString, contextString);
      const setAiResponse = set.recipeAiQuestionResponse(aiResult);
      dispatch(setAiResponse);
      localStorage.setItem("aiRecipe", aiResult);
      return aiResult;
    }
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <div className="d-flex justify-content-center" data-bs-theme="dark" style={{ width: "100%", fontSize: ".8rem" }}>
            <input
              type="text"
              className="form-control w-75"
              placeholder="Ingredient 1"
              name="ingredientOne"
              style={{ fontSize: ".8rem" }}
              id="ingredientOne"
              required
            />
            <input
              type="text"
              className="form-control mx-2 w-75"
              placeholder="Ingredient 2"
              name="ingredientTwo"
              style={{ fontSize: ".8rem" }}
              id="ingredientTwo"
              required
            />
            <div className="input-group" data-bs-theme="dark">
              <input
                type="text"
                className="form-control"
                placeholder="Ingredient 3"
                name="ingredientThree"
                style={{ fontSize: ".8rem" }}
                id="ingredientThree"
                required
              />
              <button type="submit" className="btn btn-outline-secondary btn-sm">
                Find
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
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
      localStorage.setItem("aiRecipe", "");
      console.log("component has unmounted");
    }
    return delayedUnmount;
  }
}
