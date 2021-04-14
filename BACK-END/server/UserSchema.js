const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    work : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
    },
    cpassword : {
        type : String,
        required : true
    },
    tokens : [{
        token : {
            type : String, 
            required : true
        }
    }]
})


User.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

User.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token : token });
        this.save();
        return token
    }
    catch {(e) => console.log(e); }
}

const UserModel = mongoose.model('USERDATA',User)
module.exports = UserModel;