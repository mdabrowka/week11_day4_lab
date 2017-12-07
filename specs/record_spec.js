const Record = require('../record.js')
const assert = require('assert')


describe('Record', function() {
  let record;
})

beforeEach(function() {
  record = new Record('Pink Floyd', 'Dark Side of the Moon', 'rock', 7);
})


it('record should have an artist', function() {
  assert.strictEqual(record.artist, "Pink Floyd");
})

it('record should have a title', function() {
  assert.strictEqual(record.title, "Dark Side of the Moon");
})

it('record should have an genre', function() {
  assert.strictEqual(record.genre, "rock");
})

it('record should have a price', function() {
  assert.strictEqual(record.price, 7);
})
