import { Schema, model, } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        required: false
    }
},{
    timestamps: true
});

const User = model('User',userSchema)

export default User;