const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

    calculateNumberSpy.restore();
  });

  it('should log the correct sum to the console', () => {
    const consoleLogStub = sinon.stub(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(consoleLogStub.calledOnceWithExactly('The total is: 120'));

    consoleLogStub.restore();
  });
});
