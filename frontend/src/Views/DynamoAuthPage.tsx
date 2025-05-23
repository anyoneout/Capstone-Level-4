import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDynamoAuthDidMount, selectDynamoAuthResponse } from "../redux/stateSelectors";
import { set } from "../redux/store";

export function DynamoAuthPage() {
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

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
      <div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center m-5">
            <div className="d-flex justify-content-center  mt-5">
              <h2>backend dynamo response</h2>
            </div>
            <div className="mt-3 justify-content-center d-flex text-light">
              <p> {message}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  //Added try/catch as the backend was crashing with a different port and wouldn't render {message}
  async function getAuthResponse() {
    try {
      const response = await axios.get(`${baseUrl}/dynamoAuth?email=aaa@aaa.com&password=aaa`);
      console.log("Backend response:", response.data);
      const action = set.dynamoAuthResponse(response.data);
      dispatch(action);
    } catch {
      const action = set.dynamoAuthResponse(null);
      dispatch(action);
    }
  }

  function componentDidMount(): void {
    const action = set.dynamoAuthDidMount(true);
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
      const action = set.dynamoAuthDidMount(false);
      dispatch(action);
      console.log("component has unmounted");
    }
    return delayedUnmount;
  }
}
