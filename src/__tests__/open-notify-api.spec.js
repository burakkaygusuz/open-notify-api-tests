const request = require('supertest');
const {describe, it} = require('@jest/globals');

describe('International Space Station', function () {
    it('Get Position', function () {
        response('/iss-now.json')
            .then(res => { res.body.message }, 'success');
    });
    it('Get Pass Times', function () {
        response('/iss-pass.json')
            .query({ lat: '50', lon: '100' })
            .expect('Content-Type', /json/)
            .expect(200);
    });
    it('Get People in Space', function () {
        response('/astros.json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

const response = function (route) {
    return request('http://api.open-notify.org').get(route);
};