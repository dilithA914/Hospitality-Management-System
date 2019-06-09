
var mongoose = require('mongoose');

var reportsSchema = mongoose.Schema({

    report_id:{type:String},
    user:{type:String},
    desc:{type:String},
    status:{type:String}


});

module.exports = mongoose.model('reports',reportsSchema);
