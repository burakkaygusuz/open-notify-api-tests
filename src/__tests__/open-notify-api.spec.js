const request = require('supertest');
const { expect, describe, test } = require('@jest/globals');

describe('International Space Station', () => {
    test('Get Position', async () => {
        const response = await request('http://api.open-notify.org')
            .get('/iss-now.json')
            .accept('application/json');

        expect(response.statusCode).toEqual(200);
        expect(response.body).not.toBeNull();
        expect(response.body.message).toEqual('success');
    });
    test('Get People in Space', async () => {
        const response = await request('http://api.open-notify.org')
            .get('/astros.json')
            .accept('application/json');

        expect(response.statusCode).toEqual(200);
        expect(response.body.number).toEqual(3);
    });
});