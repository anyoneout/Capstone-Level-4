import React, { useEffect } from "react";
import { getAnswer } from "../modules/appEngine/getAnswer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAiPageAnswer,
  selectAiPageDidMount,
  selectRecipeApiIngredients,
  selectRecipeApiRecipe,
} from "../redux/stateSelectors";
import { set } from "../redux/store";

export function AiPage() {
  const didMount = useSelector(selectAiPageDidMount);
  const answer = useSelector(selectAiPageAnswer);
  const recipes = useSelector(selectRecipeApiRecipe);
  const chosenIngredients = useSelector(selectRecipeApiIngredients);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <main>
      <div className="container mt-5">
        <h2>Recipe Decider AI</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="questionInput">What is the single best recipe that uses these ingredients?</label>
          <div className="d-flex justify-content-center" data-bs-theme="dark" style={{ fontSize: ".8rem" }}>
            <input
              id="questionInput"
              type="text"
              className="form-control"
              name="question"
              style={{ fontSize: ".8rem" }}
              defaultValue={chosenIngredients}
            />
            <input
              type="text"
              className="form-control mx-2"
              name="context"
              style={{ fontSize: ".8rem" }}
              defaultValue={recipes}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm mt-2 mb-3">
            Search
          </button>
        </form>
        <div>{answer}</div>
      </div>
    </main>
  );
  async function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target.elements;
    const userQuestion = form.question.value;
    const userContext = form.context.value;

    let response = await getAnswer(userQuestion, userContext);
    console.log("Submitting:", userQuestion, userContext);
    const answer = set.aiPageAnswer(response);
    dispatch(answer);
  }

  function componentDidMount(): void {
    const action = set.aiPageDidMount(true);
    dispatch(action);
    console.log("The Ai page component has mounted");
    document.title = "Recipe Deconstructor - Ai Page";
  }

  function componentDidUpdate(): void {
    if (didMount) {
      console.log("component has updated");
    }
  }

  function componentDidUnmount(): () => void {
    return function delayedUnmount(): void {
      console.log("component has unmounted");
    };
  }
}
