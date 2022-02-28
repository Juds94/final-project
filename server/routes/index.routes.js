const router = require("express").Router();

router.use("/places", (req, res, next) => {
  res.json("holita")
})

module.exports = router;
router.use("/auth", require("./auth.routes"))

module.exports = router
