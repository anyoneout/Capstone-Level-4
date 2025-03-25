import axios from "axios";
import React, { useEffect, useState } from "react";

export function Server() {
  const [serverResponse, setServerResponse] = useState<string>("");
  useEffect(componentDidMount, []);
  return (
    <main>
      <h1>server: this connects to the backend via the hostname and port</h1>
      {serverResponse}
      <br />
      {serverResponse}
      <br />
      {serverResponse}
    </main>
  );

  function componentDidMount() {
    const promise = axios.get("http://localhost:8000/");
    promise.then(handleResponse);
  }
  function handleResponse(resolveValue: any) {
    setServerResponse(resolveValue.data);
  }
}
/*   function componentDidMount() {
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
}
 */
