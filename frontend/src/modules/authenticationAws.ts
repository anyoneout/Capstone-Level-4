import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

//assigned environment variables to local credential consts
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const region = process.env.REACT_APP_AWS_REGION;

//DynamoDB user authentication with AWS credentials
export async function authenticationAws(
  email: string = "",
  password: string = ""
) {
  const apiKey = {
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  };

  //Initialized a client and converted to niceClient for ease of handling
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  //fetch request user parameters
  const request = {
    TableName: "login",
    Key: {
      email: email,
    },
  };

  //fetch request
  const response = await niceClient.get(request);

  //error handling for no user found
  if (!response.Item) {
    return false;
  }

  //assigned retrieved password from DynamoDB
  const awsPassword = response.Item.password;

  //Checks if user password matches DynamoDB password
  if (awsPassword === password) {
    return true;
  } else return false;
}
