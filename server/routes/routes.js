const PirateController = require("../controllers/controller");

module.exports = (app) => {
    app.get('/', PirateController.index);
    app.get("/pirate", PirateController.findAll);
    app.get("/pirate/:id", PirateController.findOne);
    app.post("/pirate", PirateController.create);
    app.delete("/pirate/:id", PirateController.delete);
    app.put("/pirate/:id", PirateController.update);
}