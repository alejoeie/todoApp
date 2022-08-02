const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'You must include a name.'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Please provide an email.'],
            lowercase: true,
            unique: true,
            validate:[validator.isEmail, 'Invalid email']
        },
        photo: String,
        password: {
            type: String,
            required:[true,'You must provide a password.'],
            minlength:[8,'Password must have at least 8 characters.'],
            select: false
        },
        confirmPwd:{
            type: String,
            required: [true, 'You must confirm your password.'],
            validate: {
                validator: function(el){
                    return el === this.password;
                },
                message:'Passwords do not match.'
            }
        }
    }
);

// Creamos un modelo y luego lo exportamos para que pueda ser llamado a otros archivos.
const User = mongoose.model('User', userSchema);
module.exports = User;