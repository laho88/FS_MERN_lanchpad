const mongoose = require('mongoose');
const db ="pirate-db";

mongoose.connect("mongodb://localhost/pirate-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
.then(() => console.log(`You have connected to ${db}!`))
.catch((err) => console.log(err))


require("../models/Pirate");