const {Schema, model} = require('mongoose');

new Schema({
    discordId: {
        type: String,
        require: true
    }
})