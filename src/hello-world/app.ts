import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent) => {
    return {
        'statusCode': 200,
        'body': JSON.stringify({ message: 'Hello World!', }),
    }
};
