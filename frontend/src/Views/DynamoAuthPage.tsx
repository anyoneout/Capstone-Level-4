import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDynamoAuthDidMount, selectDynamoAuthResponse } from "../redux/stateSelectors";
import { set } from "../redux/store";

export function DynamoAuthPage() {
  const didMount = useSelector(selectDynamoAuthDidMount);
  const authResponse = useSelector(selectDynamoAuthResponse);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  let message = "";
  if (authResponse === null) {
    message = "backend unreachable";
  } else if (authResponse) {
    message = "User exists";
  } else if (!authResponse) {
    message = "User does not exist";
  }

  return (
    <main>
      <h2>backend dynamo response</h2>
      {message}
    </main>
  );

  //Added try/catch as the backend was crashing with a different port and wouldn't render {message}
  async function getAuthResponse() {
    try {
      const response = await axios.get("http://localhost:3000/dynamoAuth?email=aaa@aaa.com&password=aaa");
      console.log("Backend response:", response.data);
      const action = set.dynamoAuthResponse(response.data);
      dispatch(action);
    } catch {
      const action = set.dynamoAuthResponse(null);
      dispatch(action);
    }
  }

  function componentDidMount(): void {
    const action = set.dyanamoAuthDidMount(true);
    dispatch(action);
    getAuthResponse();
    console.log("The Dynamo Auth page component has mounted");
    document.title = "Recipe Deconstructor - Dynamo Auth Page";
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
