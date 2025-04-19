import axios from "axios";
import React, { useEffect, useState } from "react";

export function DynamoAuthPage() {
  const [authResponse, setAuthResponse] = useState<boolean>(null);

  useEffect(componentDidMount, []);
  let message = "";
  if (authResponse === null) {
    message = "backend unreachable";
  } else if (authResponse) {
    message = "User exists";
  } else if (!authResponse) {
    message = "User does not exist";
  }

  function componentDidMount() {
    /*   checkBackend(); */
    getAuthResponse();
  }

  return (
    <main>
      <div className="container navbar-width ">
        <h2>backend dynamo response</h2>
        {message}
      </div>
    </main>
  );

  //Added try/catch as the backend was crashing with a different port and wouldn't render {message}
  async function getAuthResponse() {
    try {
      const response = await axios.get("http://localhost:3000/dynamoAuth?email=aaa@aaa.com&password=aaa");
      console.log("Backend response:", response.data);
      setAuthResponse(response.data);
    } catch {
      setAuthResponse(null);
    }
  }
}
