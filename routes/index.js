const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.send("Alexis Cook")
})

module.exports = routes