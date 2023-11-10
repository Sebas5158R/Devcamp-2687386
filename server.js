const express=require('express');
const dotenv=require('dotenv');
const colors = require('colors'); //Para poner color a lo que pasa en consola
const conectarDB = require('./config/db'); // Importando funcion de conectar DB
//Dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampsRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const reviewRoutes = require('./routes/reviewsRoutes');

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
app.use('/api/v1/devcamp/courses', coursesRoutes)
app.use('/api/v1/devcamp/reviews', reviewRoutes)

//Rutas de prueba
app.get('/prueba', (request, response) => {
    response.send('Hola')
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

// app.get('/prueba/:id', (request, response) => {
//     response.send(`Hola, ${request.params.id}`)
// });



app.listen(process.env.PUERTO, () => {
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgGreen.bold)
});

