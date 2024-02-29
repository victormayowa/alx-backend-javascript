const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Login endpoint', () => {
  it('Returns the message Welcome :username', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('Returns the correct object', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedObject = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedObject);
      done();
    });
  });
});
