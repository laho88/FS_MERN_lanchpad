# TO RUN:

Get your Mongo Server running first:

` cd C:\Program Files\MongoDB\Server\4.4\bin `

` mongo.exe `

```javascript:
    "client-install": "npm install --prefix client", 
    //"npm run client install" sets up client side dependencies.
    "start": "node server.js",
    "server": "nodemon server.js", //runs server 
    "client": "npm  start --prefix client", //runs client 
    "dev": "concurrently \"npm run server\" \"npm run client\"", //"npm run dev" runs both
```
## if that doesnt work, just use the original launch process:

`nodeman server.js`

`npm start`


**Refer to the client README for anything else.**