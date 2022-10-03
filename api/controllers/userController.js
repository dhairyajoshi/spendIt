const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/user')

module.exports.signup = async (req,res,next)=>{
    const usrPhone= req.body['phoneNo']
    const chk= await User.findOne({phoneNo: usrPhone})
    
    if(chk!=null){
        const token = jwt.sign(
            {
                phoneNo: usrPhone
            },
            process.env.jwt
        )

        res.status(200).json({
            token: token,
            user:chk
        })
    }

}

module.exports.login = (req,res,next)=>{
    res.send('login')
}