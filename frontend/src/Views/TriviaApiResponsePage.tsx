import axios from "axios";
import React, { useEffect, useState } from "react";

export function TriviaApiResponsePage() {
  const [apiTrivia, setApiTrivia] = useState<string>("");
  const [apiStatus, setApiStatus] = useState<string>("active");

  useEffect(componentDidMount, []);

  return (
    <main>
      <div className="container navbar-width">
        <h2>Api Trivia</h2>
        <p>{apiTrivia}</p>
        <h4>Backend Status</h4>
        <p>{apiStatus}</p>
      </div>
    </main>
  );

  function componentDidMount() {
    getApiResponse();
  }

  async function getApiResponse() {
    try {
      const response = await axios.get("http://localhost:3000/triviaRoute");
      const stringified = JSON.stringify(response.data);
      setApiTrivia(stringified);
    } catch {
      setApiStatus("unreachable");
    }
  }
}
