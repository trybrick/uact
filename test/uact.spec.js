/*global describe, it, before */

import chai from 'chai';
import Uact from '../lib/uact.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Uact',  () => {
  before(() => {
    lib = Uact;
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Uact');
    });
  });
});

