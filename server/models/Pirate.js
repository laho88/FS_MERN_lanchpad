const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You need a name matey!"],
        minlength: [3, "The name must be 3 or more characters!"]
    },
    imgUrl: {
        type: String,
        required: [true, "Add a photo"]
    },
    chestCount: {
        type: Number,
        default: 0
    },
    crewRank: {
        type: String,
        required: [true, "Yarr need to select one."],
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    },


}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;