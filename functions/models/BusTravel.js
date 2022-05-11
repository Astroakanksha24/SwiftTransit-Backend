const mongoose = require("mongoose");

const busTravel = new mongoose.Schema({
  busID: {type: String},
  startTime: {type: String},
  conductorID: {type: Array},
  ticketPrices: {type: Array}
});

module.exports = mongoose.model("BusTravel", busTravel);