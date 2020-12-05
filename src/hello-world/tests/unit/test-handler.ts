import { expect } from 'chai';
import { lambdaHandler } from '../../app';
import * as event from '../../../../events/event.json';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('Tests index', () => {
    it('verifies successful response', async () => {
        const result = await lambdaHandler(event as unknown as APIGatewayProxyEvent)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        const response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("Hello World!");
    });
});
