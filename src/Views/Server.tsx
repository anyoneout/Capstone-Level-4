import axios from "axios";
import React, { useEffect, useState } from "react";

export function Server() {
  const [rootResponse, setRootResponse] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<string>("");
  const [homeResponse, setHomeResponse] = useState<string>("");
  const [clientResponse, setClientResponse] = useState<string>("");
  const [headerResponse, setHeaderResponse] = useState<string>("");
  const [requestResponse, setRequestResponse] = useState<string>("");
  useEffect(componentDidMount, []);
  return (
    <main>
      <h1>server: this connects to the backend via the hostname and port</h1>
      {/*      {rootResponse}
      <br />
      {homeResponse}
      <br />
      {rootResponse} */}
      {headerResponse}
      <br></br>
      {requestResponse}
    </main>
  );

  function componentDidMount() {
    getHeaderResponse();
    getRequestResponse();
  }

  async function getHeaderResponse() {
    const response = await axios.get("http://localhost:9000/headers");
    const stringified = JSON.stringify(response.data);
    setHeaderResponse(stringified);
  }
  async function getRequestResponse() {
    const response = await axios.get("http://localhost:9000/request");
    const stringified = JSON.stringify(response.data);
    setRequestResponse(stringified);
  }
}
/*   function componentDidMount() {
    const promiseRoot = axios.get("http://localhost:9000/");
    promiseRoot.then(handleRootResponse);
    const promiseApi = axios.get("http://localhost:9000/api");
    promiseApi.then(handleApiResponse);
    const promiseHome = axios.get("http://localhost:9000/home");
    promiseHome.then(handleHomeResponse);
    getResponse();
  }

  function handleRootResponse(resolveValue: any) {
    setRootResponse(resolveValue.data);
  }

  async function getResponse() {
    const response = await axios.get("http://localhost:9000/client");
    const stringified = JSON.stringify(response.data);
    setClientResponse(stringified);
  }

  function handleApiResponse(resolveValue: any) {
    setApiResponse(resolveValue.data);
  }
  function handleHomeResponse(resolveValue: any) {
    setHomeResponse(resolveValue.data);
  }
}
   function componentDidMount() {
    const promise = fetch("http://localhost:8000/");
    promise.then(handleResponse);
  }
  function handleResponse(resolveValue: any) {
    const promise = resolveValue.text();
    promise.then(handleResult);
  }
  function handleResult(resolveValue: string) {
    setServerResponse(resolveValue);
  }

  
 */
