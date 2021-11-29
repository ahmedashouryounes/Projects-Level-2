const router = require('express').Router()
const { User} = require('../models/user.model')
const bcrypt = require('bcrypt')
// var hashInt = require("hash-int")
const { UserDto } = require('../dto/user.dto')
const jwt = require('jsonwebtoken')
const { application } = require('express')

// signup
router.post('/signup', async (req, res) => {
    try {
        const {name,email,password} = req.body;


        const existedUser = await User.findOne({email})
        if (existedUser) return res.status(400).json({msg: 'Email in use'});


        const user = new User({
            name,
            email,
            role: 'publisher'
        })

        // const hashedPassword = hashInt(password)//if type :Number

        const hashedPassword = bcrypt.hashSync(password, 10)
        user.password = hashedPassword

        await user.save()

        res.status(201).json({
            user: UserDto(user)
        })
    } catch(err) {
        console.log(err);
        res.status(400).json({msg: 'Failed To Create User', err})
    }

})


function add (){
    app.post('/user/signup')
}
// signin
router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({email})

    if (!user) return res.status(400).json({msg: "Incorrect Credentials"})

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) return res.status(400).json({msg: "Incorrect Credentials"})
    
    const token = jwt.sign(UserDto(user), 'ghgashdgahcvn')

    res.status(200).json({
        user: UserDto(user),
        token
    })

})

module.exports = router;