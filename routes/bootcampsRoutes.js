const express = require('express'); // Framework
const BootcampModel = require('../models/bootcampModel');
const bootcampModel = require('../models/bootcampModel');

// Definir el ruteador
const router = express.Router()

//rutas para bootscamps
//endpoint
//Traer todos los bootcamps
router.get('/', async (req, res)=>{

    //utilizar el modelo para seleccionar todos los bootcamps que estan en la bd
    const bootcamp = await  BootcampModel.find()
    
    res.json({
        success: true,
        data: bootcamp
    })
});

// Traer un bootcamp por id
router.get('/:id', async (req, res)=>{

    // Extraer el id del bootcamp ddel parametro de la url
    bootcampId = req.params.id
    const bootcamp = await bootcampModel.findById(bootcampId)

    res.json({
        success: true,
        data: bootcamp
    })
});

//Crear un bootcamp
router.post('/', async (req, res)=>{

    // El nuevo bootcamp vendra a traves del body de la request
    const newBootcamp = await bootcampModel.create(req.body)

    res.json({
        success: true,
        data: newBootcamp
    })
});

// Actualizar un bootcamp por id
router.put('/:id', async (req, res)=>{
    
    const bootcampId = req.params.id
    const updBootcamp = await bootcampModel.findByIdAndUpdate(bootcampId, req.body, { new : true }) 

    res.json({
        success: true,
        data: updBootcamp
    })
});

// eliminar un bootcamp por id
router.delete('/:id', async (req, res)=>{

    const bootcampId = req.params.id
    const delBootcamp = await BootcampModel.findByIdAndDelete(bootcampId)

    res.json({
        success: true,
        data: delBootcamp
    })
});


module.exports = router