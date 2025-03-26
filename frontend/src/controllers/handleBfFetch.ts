import { bfSaveUser } from "../modules/bfSaveUser";
import { bfRecipeImage } from "../modules/bfRecipeImage";
import { bfIngredientsList } from "../modules/bfIngredientsList";
import { bfIngredientsImage } from "../modules/bfIngredientsImage";

//handles fetch request and UI updates
export async function handleBfFetch(event) {
  event.preventDefault();
  const hfUserToken = localStorage.getItem("hfToken");

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

  bfSaveUser();

  iconVisibility(spinnerOneHTML, true);

  await updateRecipeImage(
    recipeChoice,
    recipeImgHTML,
    spinnerOneHTML,
    spinnerTwoHTML,
    secondArrow,
    hfUserToken
  );

  const ingredientsFetched = await bfIngredientsList(recipeChoice, hfUserToken);

  await updateIngredients(
    ingredientsFetched,
    recipeIngredientsHTML,
    ingredientsImgHTML,
    spinnerTwoHTML,
    hfUserToken
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
  hfUserToken: string
) {
  const dataRecipeImage = await bfRecipeImage(recipeChoice, hfUserToken);
  recipeImgHTML.src = dataRecipeImage;
  recipeImgHTML.classList.add("borderImage");
  iconVisibility(secondArrowHTML, true);
  iconVisibility(spinnerOneHTML, false);
  iconVisibility(spinnerTwoHTML, true);
}

//fetches ingredients list and image
async function updateIngredients(
  ingredientsFetched: string,
  recipeIngredientsHTML: any,
  ingredientsImgHTML: any,
  spinnerTwoHTML: any,
  hfUserToken: string
) {
  recipeIngredientsHTML.innerHTML = ingredientsFetched;

  const dataIngredientsImage = await bfIngredientsImage(
    ingredientsFetched,
    hfUserToken
  );

  iconVisibility(spinnerTwoHTML, false);
  ingredientsImgHTML.src = dataIngredientsImage;
  ingredientsImgHTML.classList.add("borderImage");
}
