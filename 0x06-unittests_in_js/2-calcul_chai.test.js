const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('test addition', () => {
    it('test (SUM, 0.4, 2.2) = 2', () => {
      expect(calculateNumber('SUM', 0.4, 2.2)).to.equal(2);
    });
    it('test (SUM, 0.5, 2.5) = 4', () => {
      expect(calculateNumber('SUM', 0.5, 2.5)).to.equal(4);
    });
    it('test (SUM, 0.4, 2.5) = 3', () => {
      expect(calculateNumber('SUM', 0.4, 2.5)).to.equal(3);
    });
    it('test (SUM, 3, 2) = 5', () => {
      expect(calculateNumber('SUM', 3, 2)).to.equal(5);
    });
  });

  describe('test subtraction', () => {
    it('test (SUBTRACT, 0.4, 2.2) = -2', () => {
      expect(calculateNumber('SUBTRACT', 0.4, 2.2)).to.equal(-2);
    });
    it('test (SUBTRACT, 0.5, 2.5) = -2', () => {
      expect(calculateNumber('SUBTRACT', 0.5, 2.5)).to.equal(-2);
    });
    it('test (SUBTRACT, 10.4, 6.6) = 3', () => {
      expect(calculateNumber('SUBTRACT', 10.4, 6.6)).to.equal(3);
    });
    it('test (SUBTRACT, 3, 2) = 1', () => {
      expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
    });
  });

  describe('test division', () => {
    it('test (DIVIDE, 4.4, 2.2) = 2', () => {
      expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2);
    });
    it('test (DIVIDE, 11.8, 2.5) = 4', () => {
      expect(calculateNumber('DIVIDE', 11.8, 2.5)).to.equal(4);
    });
    it('test (DIVIDE, 10, 4) = 2.5', () => {
      expect(calculateNumber('DIVIDE', 10, 4)).to.equal(2.5);
    });
    it('test (DIVIDE, 3, 10) = 0.3', () => {
      expect(calculateNumber('DIVIDE', 3, 10)).to.equal(0.3);
    });
    it('test (DIVIDE, 3, 0) = Error', () => {
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
  });
});
