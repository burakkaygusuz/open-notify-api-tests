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
    test('Get Pass Times', async () => {
        const response = await request('http://api.open-notify.org')
            .get('/iss-pass.json')
            .query({ lat: '50', lon: '100' });

        console.log('Get Pass Times ' + JSON.stringify(response.body, null, "\t"));

        expect(response.statusCode).toEqual(200);
        expect(response.type).toEqual("application/json");
        expect(response.body.request.latitude).toEqual(50);
        expect(response.body.request.longitude).toEqual(100);
    });
    test('Get People in Space', async () => {
        const response = await request('http://api.open-notify.org')
            .get('/astros.json');

        expect(response.statusCode).toEqual(200);
        expect(response.body.number).toEqual(3);

        console.log('Get People in Space ' + JSON.stringify(response.body, null, "\t"));
    })
});