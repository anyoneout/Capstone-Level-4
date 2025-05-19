import React, { useEffect } from "react";
import { getAnswer } from "../modules/appEngine/getAnswer";
import { useDispatch, useSelector } from "react-redux";
import { selectAiPageAnswer, selectAiPageDidMount } from "../redux/stateSelectors";
import { set } from "../redux/store";

export function AiPage() {
  const didMount = useSelector(selectAiPageDidMount);
  const answer = useSelector(selectAiPageAnswer);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        question
        <br />
        <input name="question" defaultValue="What's my name" />
        <br />
        context
        <br />
        <input name="context" defaultValue="My name is Chris" />
        <br />
        <input type="submit" />
      </form>

      {answer}
    </div>
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
