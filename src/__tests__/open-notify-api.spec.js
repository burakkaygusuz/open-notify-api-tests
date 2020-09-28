const request = require('supertest');
const { expect, describe, test } = require('@jest/globals');

describe('International Space Station', () => {
    test('Get Position', async () => {
        const response = await request('http://api.open-notify.org')
            .get('/iss-now.json');

        expect(response.statusCode).toEqual(200);
        expect(response.body.message).toEqual('success');

        console.log('Get Position ' + JSON.stringify(response.body, null, "\t"));
    });
    test('Get People in Space', async () => {
        const response = await request('http://api.open-notify.org')
            .get('/astros.json');

        expect(response.statusCode).toEqual(200);
        expect(response.body.number).toEqual(3);

        console.log('Get People in Space ' + JSON.stringify(response.body, null, "\t"));
    })
});