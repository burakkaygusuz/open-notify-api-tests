const request = require('supertest');
const { describe, it } = require('@jest/globals');

describe('International Space Station', () => {
    it('Get Position', () => {
        response('/iss-now.json')
            .then(res => { res.body.message }, 'success');
    });
    it('Get Pass Times', () => {
        response('/iss-pass.json')
            .query({ lat: '50', lon: '100' })
            .expect('Content-Type', /json/)
            .expect(200);
    });
    it('Get People in Space', () => {
        response('/astros.json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

const response = (route) => {
    return request('http://api.open-notify.org').get(route);
};