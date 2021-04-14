const express = require('express');
const router = express.Router();
const User = require('./UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('./authentiacate');

router.get('/', (req, res) => {
    res.send('Home Router');
})

//Register
router.post('/register', (req, res) => {
    const { name , email , phone , work , password , cpassword } = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error : 'please fill all fields properly'})
    }
    User.findOne({email}).then((userExist) => {
        if(userExist){
            return res.status(422).json({error : 'Email or Phone already exist'})
        }
        
        const user = new User({name , email , phone , work , password , cpassword });

        user.save().then(() => {
            res.status(201).json({message : "User register successfully"})
        })
        .catch(err => { console.log(err);})
    })
})


//Login
router.post('/login', async (req,res) => {
    try {
        let token;
        const { email, password } = req.body;
        if( !email || !password ){
            return res.status(400).json({error : "Fill all the fields properly"});
        }
        const userLogin = await User.findOne({ email : email });
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
             
            res.cookie("jwt", token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            });
            if (!isMatch) {
                res.status(400).json({error : "Invalid Credientials"});
            }
            else{
                res.json({message : "user Login successful"})
            }
        }
        else{
                res.json({message : "Invalid Credientials"})
            }
        }
    catch (err) {
        console.log(err);
    }
})

router.get('/about', authenticate , (req,res) => {
    res.send(req.rootUser);
})

module.exports = router;  