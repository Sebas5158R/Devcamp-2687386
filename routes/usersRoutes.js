const express = require('express');
const userModel = require('../models/usersModel');
const mongoose = require('mongoose')

const router = express.Router()

// USUARIOS
router.get('/', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todos Los usuario"
    })
});

// Traer un usuario por id
router.get('/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el usuario cuyo id es ${req.params.id}`
    })
});


//Crear un usuario
router.post('/register', async (req, res)=>{
    try {
        const user = await userModel.create(req.body)
        res.status(201).json({
            success: true,
            data: user
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
});

// Para el inicio de sesión
router.post('/login', async (req, res)=>{
    // 1. NO LLEGA EMAIL O PASSWORD
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Faltan email o password'
        })
    } else {
        // 2. SI LLEGA EMAIL, PERO EL USUARIO DE ESE EMAIL NO EXISTE
        const user = await userModel.findOne({email}).select("+password")
        //console.log(user)
        if(!user) {
            return res.status(400).json({
                success: false,
                message: 'El usuario no existe'
            })
        }else {
            // 3. SI LLEGA EMAIL, Y EL USUARIO EXISTE PERO EL PASSWORD NO CORRESPONDE
            const isMatch = await user.compararPassword(password)
            if(isMatch){
                return res.status(200).json({
                    success: true,
                    msg: 'usuario logueado correctamente',
                    data: user
                })
            }else {
                return res.status(400).json({
                    success: false,
                    msg: 'Credenciales incorrectas'
                })
            }
        }
    }

    
    
});


// Actualizar un usuario por id
router.put('/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el usuario cuyo id es ${req.params.id}`
    })
});

// eliminar un usuario por id
router.delete('/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el usuario cuyo id es ${req.params.id}`
    })
});

module.exports = router