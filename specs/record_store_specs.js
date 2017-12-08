const RecordStore = require('../record_store.js')
const Record = require('../record.js')
const assert = require('assert')


describe('RecordStore', function() {
  let recordStore;
  let record;
  let record1;
});

beforeEach(function() {
  recordStore = new RecordStore("Zack's Records", "Edinburgh", [], 0);
  record = new Record('Pink Floyd', 'Dark Side of the Moon', 'rock', 7);
  record1 = new Record('Pink Floyd', 'Wish You Were Here', 'rock', 9);
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
}),

it('record store can add record to inventory', function(){
  recordStore.addRecord(record);
  assert.strictEqual(recordStore.inventory.length, 1);
}),

it('record store can list inventory', function(){
  recordStore.addRecord(record);
  recordStore.addRecord(record1);
  assert.deepStrictEqual(recordStore.listInventory(), ["Artist: Pink Floyd, title: Dark Side of the Moon, genre: rock, price: 7", "Artist: Pink Floyd, title: Wish You Were Here, genre: rock, price: 9" ])
})

it('recordStore can sell record', function(){
  recordStore.addRecord(record);
  recordStore.addRecord(record1);
  recordStore.sellRecord(record);
  assert.strictEqual(recordStore.inventory.length, 1);
  assert.strictEqual(recordStore.balance, 7);
})

// it('record store can get financial info', function(){
//   recordStore.addRecord(record);
//   recordStore.addRecord(record1);
//   recordStore.sellRecord(record);
//   assert.strictEqual(recordStore.financialInfo(), "Balance: 7, inventory value: 9")
// })

it('record store can calculate the inventory value', function() {
  recordStore.addRecord(record);
  recordStore.addRecord(record);
  recordStore.addRecord(record1);
  assert.strictEqual(recordStore.inventoryValue(), 23);
})
