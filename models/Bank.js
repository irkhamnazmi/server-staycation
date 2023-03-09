const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
    nameBank: {
        type: String,
        require: true
    },
    nomorRekening: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model('Bank', bankSchema);