import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

import dotenv from "dotenv";

dotenv.config();

//DynamoDB user authentication with AWS credentials
export function getDynamoNiceClient(): DynamoDBDocument {
  const apiKey = {
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
  };

  //Initialized a client and converted to niceClient for ease of handling
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);
  return niceClient;
}
