const express = require('express');
const app = express();
console.log('APP:', app);
const cors = require('cors');
const port = 8080;

require("./server/config/config");
require('./server/routes/routes')(app);

app.use(cors());
app.use(express.json());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// app.get("/api", (request, response) => {
//     response.json({message: hello});
// })

//Server is running
app.listen(port, () => {
    console.log("App is running well on port 8080!");
})