const router = require("express").Router();

router.use("/auth", require("./auth.routes"))
router.use("/places", require("./places.routes"))

module.exports = router
