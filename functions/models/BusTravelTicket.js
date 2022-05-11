const mongoose = require("mongoose");

const busTravelTicketSmart = new mongoose.Schema({
    busTravelID: {type: String},
    userID: {type: String},
    quantity: {type: String},
    isDayPass: {type: Boolean},
    price: {type: Number},
    source: {type: String},
    destination: {type: String},
    perTicketCost: {type: String}
});

module.exports = mongoose.model("BusTravelTicket", busTravelTicket);