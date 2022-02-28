const router = require("express").Router();

router.use("/pitches", require("./pitches.routes"))
router.use("/auth", require("./auth.routes"))
router.use("/places", require("./places.routes"))
router.use("/user", require("./user.routes"))

module.exports = router
