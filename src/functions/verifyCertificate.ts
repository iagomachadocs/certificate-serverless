import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";


export const handler: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters;

  const queryCertificate = await document.query({
    TableName: "users_certificate",
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
      ":id": id
    }
  }).promise();

  const userCertificate = queryCertificate.Items[0];

  if(userCertificate) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Valid certificate",
        name: userCertificate.name,
        url: `https://certificate-serverless-iago.s3.amazonaws.com/${id}.pdf`
      })
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "Invalid certificate",
    })
  }
}