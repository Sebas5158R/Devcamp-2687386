const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true, "Nombre requerido"
        ]
    },
    email: {
        type: String,
        unique: true,
        required: [
            true, "email requerido"
        ],
        match: [
            /^w+@[a-zA-Z]+?\.[a-zA-A]{2,3}$/,
            "Email invalido"
        ]
    },
    password: {
        type: String,
        required: [
            true, "Contraseña requerida"
        ],
        maxlength: [6, "contraseña muy debil"]
    }
})