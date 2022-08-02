const User = require('../models/userModels');

exports.getAllUsers = async(req, res) => {
    const getAll = User.find();

    res.send(200).json({
        status: 'success',
        data:{
            getAll
        }
    })
}