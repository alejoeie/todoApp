const User = require('../models/userModels');

exports.signup = async(req, res, next) => {
    const newUser = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        confirmPwd : req.body.confirmPwd
    })

    try {
        res.status(200).json({
            status: 'success',
            data: {
                user : newUser
            }
        })
    } catch(err){
        res.status(401).json({
            status: 'fail',
            message: err
        })
    }
}