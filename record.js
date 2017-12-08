const Record = function (artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.propertiesToString = function() {
  return `Artist: ${this.artist}, title: ${this.title}, genre: ${this.genre}, price: ${this.price}`
}



module.exports = Record;
