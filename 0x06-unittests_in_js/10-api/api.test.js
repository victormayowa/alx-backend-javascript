const request = require('request');
const { expect } = require('chai');

const URL = 'http://localhost:7865';

describe('payment api home', () => {
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

describe('payment API cart page', () => {
  it('test status code for GET /cart/5 is 200', (done) => {
    request.get(`${URL}/cart/5`, (err, res) => {
      
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(200);
        done();
      }
    });
  });
  it('test response data for GET /cart/5 is correct', (done) => {
    request.get(`${URL}/cart/5`, (err, res) => {
      
      if (err) done(err);
      else {
        expect(res).has.property('body', 'Payment methods for cart 5');
        done();
      }
    });
  });
  it('test status code for GET /cart/five is 404', (done) => {
    request.get(`${URL}/cart/five`, (err, res) => {
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(404);
        done();
      }
    });
  });
});

describe('available payments', () => {
  it('test status code for GET /available_payments', (done) => {
    request.get(`${URL}/available_payments`, (err, res) => {
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(200);
        done();
      }
    });
  });
  it('test return data for GET /available_payments', (done) => {
    request.get(`${URL}/available_payments`, (err, res) => {
      if (err) done(err);
      else {
        const res_body = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(res).has.property('body');
        expect(JSON.parse(res.body)).to.be.deep.equal(res_body);
        done();
      }
    });
  });
});

describe('login page', () => {
  it('test POST /login', (done) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userName: 'Test User'})
    };
    request.post(`${URL}/login`, options, (err, res) => {
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.equal('Welcome Test User');
        done();
      }
    });
  });
});
