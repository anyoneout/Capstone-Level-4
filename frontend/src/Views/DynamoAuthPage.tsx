import axios from "axios";
import React, { useEffect, useState } from "react";

export function DynamoAuthPage() {
  const [authResponse, setAuthResponse] = useState<boolean>(null);
  useEffect(componentDidMount, []);

  return <main>{authResponse}</main>;

  function componentDidMount() {
    getAuthResponse();
  }

  async function getAuthResponse() {
    const response = await axios.get(
      "http://localhost:3000/dynamoAuth?email=aaa@aaa.com&password=aaa"
    );
    setAuthResponse(response.data);
  }
}
