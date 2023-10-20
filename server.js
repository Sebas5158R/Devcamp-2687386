const express=require('express');
const dotenv=require('dotenv');
const colors = require('colors'); //Para poner color a lo que pasa en consola

//Vincular en archivo .env
dotenv.config(
    { 'path' : './config/.env' }
);

// Construir objeto app
app = express()

//Rutas de prueba
app.get('/prueba', (request, response) => {
    response.send('Hola')
});

//rutas para bootscamps
//endpoint
//Traer todos los bootcamps
app.get('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se Mostrara Todos Los Bootcamps"
    })
});

// Traer un bootcamp por id
app.get('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui Se Mostrara el bootcamp cuyo id es ${req.params.id}`
    })
});

//Crear un bootcamp
app.post('/bootcamps', (req, res)=>{
    res.json({
        success: true,
        msg: "Aqui Se creará un bootcamp"
    })
});

// Actualizar un bootcamp por id
app.put('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se editara el bootcamp cuyo id es ${req.params.id}`
    })
});

// Actualizar un bootcamp por id
app.delete('/bootcamp/:id', (req, res)=>{
    res.json({
        success: true,
        msg: `Aqui se eliminara el bootcamp cuyo id es ${req.params.id}`
    })
});


// app.get('/prueba/:id', (request, response) => {
//     response.send(`Hola, ${request.params.id}`)
// });



app.listen(process.env.PUERTO, () => {
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgGreen.bold)
});

