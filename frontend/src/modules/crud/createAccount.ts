import axios from "axios";
import { Account } from "../../types/Account";

export async function createAccount(account: Account): Promise<{ status: number }> {
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

  const { email, password, name, phone } = account;

  //checks if fields are all filled in
  if (!email || !password || !name || !phone) {
    return { status: 400 };
  }
  //checks if email already exists on the server
  const readUrl = `${baseUrl}/readUser`;
  const readUser = await axios.post(readUrl, { email, password, name: "", phone: "" });
  console.log("readUser response for create account", readUser);
  //if email already exists return status code 409
  if (readUser?.data?.email === email) {
    return { status: 409 };
  }
  //creates new user and returns status code
  const createUrl = `${baseUrl}/createUser`;
  const response = await axios.post(createUrl, { email, password, name, phone });
  console.log("createUser response for create account", response);
  return { status: response.status };
}
