const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {type: String, required: true},
    team: {type: String, default: ''},
    record: {type: Array, default: [0,0,0]}
})


module.exports = mongoose.model('Player', PlayerSchema);