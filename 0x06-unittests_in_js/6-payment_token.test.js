const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
