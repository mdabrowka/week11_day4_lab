const RecordStore = function(name, city, inventory, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function(record){
  this.inventory.push(record);
}

RecordStore.prototype.listInventory = function() {
  let inventoryList = [];
  this.inventory.forEach(function(record) {
    inventoryList.push(record.propertiesToString());
  })

  return inventoryList;
}

RecordStore.prototype.sellRecord = function(record){
  this.inventory.pop(record);
  this.balance += record.price;
}


RecordStore.prototype.inventoryValue = function() {
  let total = 0;
  for (item of this.inventory) {
    total += item.price;
  };
  return total;
}

RecordStore.prototype.financialInfo = function() {
 return `Balance: ${this.balance}, inventory value: ` + this.inventoryValue();
}


module.exports = RecordStore;
