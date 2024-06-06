const request = require('request');
const { expect } = require('chai');

describe('payment api home', () => {
  const URL = 'http://localhost:7865/';
  it('test status code for GET / is 200', (done) => {
    request.get(URL, (err, res) => {
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(200);
        done();
      }
    });
  });
  it('test response data for GET / is correct', (done) => {
    request.get(URL, (err, res) => {
      if (err) done(err);
      else {
        expect(res).has.property('body', 'Welcome to the payment system');
        done();
      }
    });
  });
});
