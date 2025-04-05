import axios from "axios";
import React, { useEffect, useState } from "react";

export function DynamoAuthPage() {
  const [authResponse, setAuthResponse] = useState<boolean>(null);
  const [notReachable, setNotReachable] = useState<boolean>(null);

  function componentDidMount() {
    getAuthResponse();
  }

  async function getAuthResponse() {
    const response = await axios.get("http://localhost:3000/dynamoAuth?email=aaa@aaa.com&password=aaa");
    console.log("Backend response:", response.data);
    setAuthResponse(response.data);
  }

  useEffect(componentDidMount, []);
  let message = "";
  if (authResponse) {
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
}
