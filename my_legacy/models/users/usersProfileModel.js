const mongoose = require('mongoose')
const validator = require('validator')

const userProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone number is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    address_1: {
        type: String,
        trim: true,
    },
    address_2: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true
    },
    zip: {
        type: Number,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    i_agree: {
        type: Number,
        trim: true,
        default: 0
    },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const userProfile = mongoose.model('user_Profile', userProfileSchema)

module.exports = userProfile