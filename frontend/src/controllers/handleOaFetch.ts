import { oaIngredientsList } from "../modules/oaIngredientsList";
import { oaSaveUser } from "../modules/oaSaveUser";
import { oaIngredientsImage } from "../modules/oaIngredientsImage";
import { oaRecipeImage } from "../modules/oaRecipeImage";

//handles fetch request and UI updates
export async function handleOaFetch() {
  const oaUserToken = localStorage.getItem("oaiToken");

  const elements = getDomElements();
  const {
    recipeChoice,
    recipeIngredientsHTML,
    ingredientsImgHTML,
    recipeImgHTML,
    secondArrow,
    spinnerOneHTML,
    spinnerTwoHTML,
  } = elements;

  oaSaveUser();

  iconVisibility(spinnerOneHTML, true);

  await updateRecipeImage(
    recipeChoice,
    recipeImgHTML,
    spinnerOneHTML,
    spinnerTwoHTML,
    secondArrow,
    oaUserToken
  );

  const ingredientsFetched = await oaIngredientsList(recipeChoice, oaUserToken);

  await updateIngredients(
    ingredientsFetched,
    recipeIngredientsHTML,
    ingredientsImgHTML,
    spinnerTwoHTML,
    oaUserToken
  );
}
//Get DOM elements
function getDomElements() {
  return {
    recipeChoice: document.getElementById("chosenRecipe") as any,
    recipeIngredientsHTML: document.getElementById("recipeIngredients") as any,
    ingredientsImgHTML: document.getElementById("ingredientsAI") as any,
    recipeImgHTML: document.getElementById("recipeAI") as any,
    secondArrow: document.getElementById("secondArrowHTML") as any,
    spinnerOneHTML: document.getElementById("spinnerOne") as any,
    spinnerTwoHTML: document.getElementById("spinnerTwo") as any,
  };
}
//controls icon visibility by condition
function iconVisibility(element: any, isVisible: boolean) {
  element.style.visibility = isVisible ? "visible" : "hidden";
}

//fetches recipe image by user choice, controls icon visibility
async function updateRecipeImage(
  recipeChoice: any,
  recipeImgHTML: any,
  spinnerOneHTML: any,
  spinnerTwoHTML: any,
  secondArrowHTML: any,
  oaUserToken: string
) {
  const dataRecipeImage = await oaRecipeImage(recipeChoice, oaUserToken);
  recipeImgHTML.src = dataRecipeImage.data[0].url;
  recipeImgHTML.classList.add("borderImage");
  iconVisibility(secondArrowHTML, true);
  iconVisibility(spinnerOneHTML, false);
  iconVisibility(spinnerTwoHTML, true);
}

//fetches ingredients list and image
async function updateIngredients(
  ingredientsFetched: any,
  recipeIngredientsHTML: any,
  ingredientsImgHTML: any,
  spinnerTwoHTML: any,
  oaUserToken: string
) {
  recipeIngredientsHTML.innerHTML = ingredientsFetched;

  const dataIngredientsImage = await oaIngredientsImage(
    ingredientsFetched,
    oaUserToken
  );

  iconVisibility(spinnerTwoHTML, false);
  ingredientsImgHTML.src = dataIngredientsImage.data[0].url;
  ingredientsImgHTML.classList.add("borderImage");
}
