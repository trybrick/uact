import test from 'ava'
import assert from 'assert'
import Uact from '../src/index.js'

test('Given an instance of my Uact', t => {
  t.is(Uact.name, 'Uact')
})