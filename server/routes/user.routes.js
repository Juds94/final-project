const router = require("express").Router()
const User = require("../models/User.model")
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('./../middlewares/jwt.middleware')



router.get("/getAllUsers", (req, res) => {


    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.put("/edit/:user_id", (req, res) => {

    const { user_id } = req.params


    User

        .findByIdAndUpdate(user_id, { ...req.body }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json(err))


})

router.put("/favPlaces/:place_id", isAuthenticated, (req, res) => {

    const { place_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $push: { "favPlaces": place_id } }, { new: true })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))

})

router.put("/donePitches/:pitch_id", isAuthenticated, (req, res) => {

    const { pitch_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $push: { donePitches: { pitch: pitch_id } } }, { new: true })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))

})

router.put("/wishPitches/:pitch_id", isAuthenticated, (req, res) => {

    const { pitch_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $push: { "wishPitches": pitch_id } }, { new: true })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json(err))

})







module.exports = router