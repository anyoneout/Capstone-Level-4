import React, { useState } from "react";
import axios from "axios";

export function BackendTest() {
  const isLocal = window.location.hostname === "localhost";

  const lambdaUrl = isLocal
    ? "http://localhost:3001"
    : "https://lqdp6w66jyvu6uzkc4wsqgvs2i0hhpvk.lambda-url.us-east-1.on.aws";

  const appEngineUrl = isLocal ? "http://localhost:3000" : "https://capstone-level-4.uc.r.appspot.com";

  const [connectionResult, setConnectionResult] = useState("");

  async function testBackend(path: string) {
    const response = await axios.get(path);
    if (response.status === 200) {
      setConnectionResult(`${response.data} at ${path}`);
    } else {
      setConnectionResult("Unable to connect to backend");
    }
  }

  return (
    <div>
      <h2>Test Backend Connections</h2>
      <button onClick={() => testBackend(`${lambdaUrl}/`)}>Test Lambda</button>
      <button onClick={() => testBackend(`${appEngineUrl}/`)}>Test App Engine</button>
      <p>{connectionResult}</p>
    </div>
  );
}
