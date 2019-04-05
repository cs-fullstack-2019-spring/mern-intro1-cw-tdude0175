var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TroubleTicketSchema = new Schema
(
    {
        person:String,
        problem:String,
        date:String
    }
);

module.exports = mongoose.model("TicketTrouble", TroubleTicketSchema);