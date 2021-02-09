const mongoose = require("mongoose");
const mongooseuniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Fullname cannot be blank."],
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: [true, "Lastname cannot be blank."],
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: [true, "Username cannot be blank."],
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "Email cannot be blank."],
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password cannot be blank."],
        trim: true,
    },
    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
}, {
    timestamps: true
});

userSchema.plugin(mongooseuniqueValidator, {
    message: '{PATH}({VALUE}) already exists.'
})

module.exports = mongoose.model("User", userSchema);