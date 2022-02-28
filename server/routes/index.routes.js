const router = require("express").Router();

router.use("/places", (req, res, next) => {
  res.json("holita")
})

router.use("/pitches",require("./pitches.routes"))

router.use("/auth", require("./auth.routes"))

// router.use("/user", require("./user.routes"))

module.exports = router
