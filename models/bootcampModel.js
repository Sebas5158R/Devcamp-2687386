const mongoose= require('mongoose')

//definir SCHEMA 

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [
            true, 
            "Nombre Requerido" 
        ]
    },
    phone: {
        type: Number,
        required: [
            true, 
            "Telefono Requerido" 
        ],
        maxlenght: [
            10, "no debe ser mayor a 10 digitos"
        ]
        ,
        minlenght: [
            7, "debe tener almenos 7 digitos"
        ]
    },
    address: {
        type: String,
        required: [
            true, 
            "Direccion Requerido" 
        ]
    },
    topics: {
        type: [String],
        enum: [
            "Backend",
            "Frontend",
            "Devops",
            "AI"
        ]
    },
    createdAt: Date
})

module.exports = mongoose.model('bootcamp', bootcampSchema)