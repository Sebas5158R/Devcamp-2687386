const express=require('express');
const dotenv=require('dotenv');
const colors = require('colors'); //Para poner color a lo que pasa en consola
const conectarDB = require('./config/db'); // Importando funcion de conectar DB
//Dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampsRoutes');

//Vincular en archivo .env
dotenv.config(
    { 'path' : './config/.env' }
);

// CONECTAR A LA BD
conectarDB()

// Construir objeto app
const app = express()
app.use(express.json())

// Conectar las rutas al objeto app
app.use('/api/v1/devcamp/bootcamps', bootcampsRoutes)

//Rutas de prueba
app.get('/prueba', (request, response) => {
    response.send('Hola')
});



// CURSOS
app.get('/courses', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todos Los cursos"
    })
});

// Traer un curso por id
app.get('/course/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el curso cuyo id es ${req.params.id}`
    })
});


//Crear un curso
app.post('/course', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará un curso"
    })
});


// Actualizar un cursos por id
app.put('/course/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el curso cuyo id es ${req.params.id}`
    })
});

// eliminar un cursos por id
app.delete('/course/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el curso cuyo id es ${req.params.id}`
    })
});


// USUARIOS
app.get('/users', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todos Los usuario"
    })
});

// Traer un usuario por id
app.get('/user/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el usuario cuyo id es ${req.params.id}`
    })
});


//Crear un usuario
app.post('/user', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará un usuario"
    })
});


// Actualizar un usuario por id
app.put('/user/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el usuario cuyo id es ${req.params.id}`
    })
});

// eliminar un usuario por id
app.delete('/user/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el usuario cuyo id es ${req.params.id}`
    })
});


//REVIEWS
app.get('/reviews', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostraran Todas Las reviews"
    })
});

// Traer una review por id
app.get('/review/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara la review cuyo id es ${req.params.id}`
    })
});


//Crear una review
app.post('/review', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará una review"
    })
});


// Actualizar una review por id
app.put('/review/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara la review cuyo id es ${req.params.id}`
    })
});

// eliminar una review por id
app.delete('/review/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara la review cuyo id es ${req.params.id}`
    })
});

// app.get('/prueba/:id', (request, response) => {
//     response.send(`Hola, ${request.params.id}`)
// });



app.listen(process.env.PUERTO, () => {
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgGreen.bold)
});

