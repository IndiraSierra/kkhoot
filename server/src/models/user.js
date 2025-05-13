import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 6;
            },
            message: props => `Password must be at least 6 characters long!`
        },
        validator: {
            validator: function(v) {
                return /[a-zA-Z]/.test(v) && /\d/.test(v);
            },
            message: props => `Password must contain at least one letter and one number!`
        },
        select: false   // Exclude password from query results by default

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});