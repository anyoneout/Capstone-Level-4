import axios from "axios";
import React, { useEffect } from "react";
import { selectTriviaApiDidMount, selectTriviaApiStatus, selectTriviaApiTrivia } from "../redux/stateSelectors";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../redux/store";

export function TriviaApiResponsePage() {
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

  const didMount = useSelector(selectTriviaApiDidMount);
  const apiTrivia = useSelector(selectTriviaApiTrivia);
  const apiStatus = useSelector(selectTriviaApiStatus);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <main>
      <h2>Api Trivia</h2>
      <p>{apiTrivia}</p>
      <h4>Backend Status</h4>
      <p>{apiStatus}</p>
    </main>
  );

  async function getApiResponse() {
    try {
      const response = await axios.get(`${baseUrl}/triviaRoute`);
      const stringified = JSON.stringify(response.data);
      const action = set.triviaApiTrivia(stringified);
      dispatch(action);
    } catch {
      const action = set.triviaApiStatus("unreachable");
      dispatch(action);
    }
  }

  function componentDidMount(): void {
    const action = set.triviaApiDidMount(true);
    dispatch(action);
    getApiResponse();
    console.log("The Trivia Api page component has mounted");
    document.title = "Recipe Deconstructor - Trivia Api Page";
  }

  function componentDidUpdate(): void {
    if (didMount) console.log("component had updated");
  }

  function componentDidUnmount(): () => void {
    function delayedUnmount(): void {
      console.log("component has unmounted");
    }
    return delayedUnmount;
  }
}
