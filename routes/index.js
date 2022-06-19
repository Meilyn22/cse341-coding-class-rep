const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))
router.use('/', require('./swagger'))
router.get("/", (req, res) => {
    res.send("Alexis Cook")
})

module.exports = router;