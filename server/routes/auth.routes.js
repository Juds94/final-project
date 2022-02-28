const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require('bcryptjs')

const saltRounds = 10

router.post("/signup", (req, res, next) => {

    const { username, email, password} = req.body

    if (email === '' || password === '' || username === '') {
        res.status(400).json({ message: "Es necesario introducir email, contraseña u nombre de usuario" })
        return
    }

    User
        .findOne({email})
        .then((foundUser)=>{
            if(foundUser){
                res.status(400).json({message: "Email ya registrado"})
                return
            }
            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)
            return User.create({...req.body, password: hashedPassword})
        })

        .catch(err =>{
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })

} )

module.exports = router