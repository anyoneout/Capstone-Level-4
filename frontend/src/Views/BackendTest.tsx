import React, { useEffect, useState } from "react";
import axios from "axios";
import { set } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectTestBackendDidMount } from "../redux/stateSelectors";

export function BackendTest() {
  const isLocal = window.location.hostname === "localhost";

  const didMount = useSelector(selectTestBackendDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  const lambdaUrl = isLocal
    ? "http://localhost:3001"
    : "https://xfmkpte65aklcazfch4vyxfuzy0qdczd.lambda-url.us-east-1.on.aws";

  const appEngineUrl = isLocal ? "http://localhost:3050" : "https://capstone-level-4.uc.r.appspot.com";

  const [connectionResult, setConnectionResult] = useState("");

  async function testBackend(path: string) {
    const response = await axios.get(path);
    if (response.status === 200) {
      setConnectionResult(`${response.data} at: ${path}`);
    } else {
      setConnectionResult("Unable to connect to backend");
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center m-5">
          <div className="d-flex justify-content-center  mt-5">
            <h2>Test Backend Connections</h2>
          </div>
          <div className="col-10 m-2 mt-2 justify-content-center d-flex">
            <button className="btn btn-danger btn-sm m-1" onClick={() => testBackend(`${lambdaUrl}/`)}>
              Lambda
            </button>

            <button className="btn btn-danger btn-sm m-1" onClick={() => testBackend(`${appEngineUrl}/`)}>
              App Engine
            </button>
          </div>
          <div className="mt-3 justify-content-center d-flex text-light">
            <p>{connectionResult}</p>
          </div>
        </div>
      </div>
    </div>
  );

  function componentDidMount(): void {
    const action = set.testBackendDidMount(true);
    dispatch(action);
    console.log("The Ai page component has mounted");
    document.title = "Recipe Deconstructor - Test Backend";
  }

  function componentDidUpdate(): void {
    if (didMount) {
      console.log("component has updated");
    }
  }

  function componentDidUnmount(): () => void {
    return function delayedUnmount(): void {
      const action = set.testBackendDidMount(false);
      dispatch(action);
      console.log("component has unmounted");
    };
  }
}
