import axios from "axios";
import React, { useEffect, useState } from "react";

export function TriviaApiResponsePage() {
  const [apiTrivia, setApiTrivia] = useState<string>("");
  useEffect(componentDidMount, []);
  return <main>{apiTrivia}</main>;

  function componentDidMount() {
    getApiResponse();
  }

  async function getApiResponse() {
    const response = await axios.get("http://localhost:3000/triviaRoute");
    const stringified = JSON.stringify(response.data);
    setApiTrivia(stringified);
  }
}
