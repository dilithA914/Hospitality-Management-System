
var mongoose = require('mongoose');

var entriesSchema = mongoose.Schema({
    Name:{type:String},
    id:{type:String},
    location:{type:String},
    price:{type:String},


});

module.exports = mongoose.model('entries',entriesSchema);
