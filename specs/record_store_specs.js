const RecordStore = require('../record_store.js')
const Record = require('../record.js')
const assert = require('assert')


describe('RecordStore', function() {
  let recordStore;
  let record;
});

beforeEach(function() {
  recordStore = new RecordStore("Zack's Records", "Edinburgh", [], 0);
  record = new Record('Pink Floyd', 'Dark Side of the Moon', 'rock', 7);
})


it('record store should have a name', function() {
  assert.strictEqual(recordStore.name, "Zack's Records");
}),

it('record store should have a city', function() {
  assert.strictEqual(recordStore.city, "Edinburgh");
}),

it('record store inventory starts empty', function() {
  assert.strictEqual(recordStore.inventory.length, 0);
}),

it('record store balance starts at 0', function() {
  assert.strictEqual(recordStore.balance, 0);
})
