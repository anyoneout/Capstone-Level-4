import React, { useState } from "react";
import { getAnswer } from "../modules/appEngine/getAnswer";

export function Ai() {
  const [answer, setAnswer] = useState("");

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
    setAnswer(response);
  }
}
