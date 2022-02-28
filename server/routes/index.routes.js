const router = require("express").Router();
const Places = require('./../models/Place.model')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/places", (req, res, next) => {
  res.json("holita")
})

module.exports = router;
